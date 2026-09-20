import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aclk8kb3l {
  fill: currentColor;
  d: path("m9.025 12.725l2.4-6.575l8.45 3.075q1.575.575 2.275 2.063t.125 3.062l-1.025 2.825zm-7.6.425l.675-1.875l18.8 6.85L20.225 20zM4.2 10.675Q3.325 9.8 3.325 8.55T4.2 6.425t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875t-2.125-.875");
}
</style><path class="aclk8kb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airline-seat-flat-angled"} {...others} />);
}

export default Component;
