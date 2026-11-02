import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5g2cq1iy {
  fill: currentColor;
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107m12.142 3.522l-2-5a.998.998 0 0 0-1.856 0l-2 5a1 1 0 0 0 0 .742l2 5a.998.998 0 0 0 1.856 0l2-5a1 1 0 0 0 0-.742");
}
</style><path class="m5g2cq1iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:compass-fill-round"} {...others} />);
}

export default Component;
