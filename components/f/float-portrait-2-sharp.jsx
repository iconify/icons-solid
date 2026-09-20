import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3wf_qb2l {
  fill: currentColor;
  d: path("M8 11h6V6H8zm12 11H4V2h16z");
}
</style><path class="o3wf_qb2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-portrait-2-sharp"} {...others} />);
}

export default Component;
