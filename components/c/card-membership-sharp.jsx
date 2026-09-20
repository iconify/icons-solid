import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r1g338btr {
  fill: currentColor;
  d: path("M2 2h20v15h-6v5l-4-2l-4 2v-5H2zm2 11h16v-3H4z");
}
</style><path class="r1g338btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:card-membership-sharp"} {...others} />);
}

export default Component;
