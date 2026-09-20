import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8-yrybef {
  fill: currentColor;
  d: path("m21.25 17.175l-12.225-4.45l2.4-6.575L23.65 10.6zM20.225 20l-18.8-6.85l.675-1.875l18.8 6.85zM4.2 10.675Q3.325 9.8 3.325 8.55T4.2 6.425t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875t-2.125-.875");
}
</style><path class="f8-yrybef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airline-seat-flat-angled-sharp"} {...others} />);
}

export default Component;
