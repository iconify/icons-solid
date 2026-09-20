import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tw710vokm {
  fill: currentColor;
  d: path("m8 20l-6-8l6-8h14v16zm-3.5-8L9 18h11V6H9zM9 13h2v-2H9zm3.5 0h2v-2h-2zm3.5 0h2v-2h-2z");
}
</style><path class="tw710vokm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:more-outline-sharp"} {...others} />);
}

export default Component;
