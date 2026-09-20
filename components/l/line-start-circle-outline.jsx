import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwxbsfb5k {
  fill: currentColor;
  d: path("M10.825 14.825Q12 13.65 12 12t-1.175-2.825T8 8T5.175 9.175T4 12t1.175 2.825T8 16t2.825-1.175M8 18q-2.5 0-4.25-1.75T2 12t1.75-4.25T8 6q2.25 0 3.913 1.425T13.925 11H22v2h-8.075q-.35 2.15-2.013 3.575T8 18m0-6");
}
</style><path class="xwxbsfb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-circle-outline"} {...others} />);
}

export default Component;
