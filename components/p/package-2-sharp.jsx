import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erq4k48ue {
  fill: currentColor;
  d: path("M11 21.725v-9.15L3 7.95v9.175zm2 0l8-4.6V7.95l-8 4.625zm3.975-13.75l2.95-1.725L12 1.7L9.025 3.4zM12 10.85l2.975-1.7l-7.925-4.6l-3 1.725z");
}
</style><path class="erq4k48ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:package-2-sharp"} {...others} />);
}

export default Component;
