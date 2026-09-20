import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.egokoxs_q {
  fill: currentColor;
  d: path("M96 156h120a20 20 0 0 0 20-20V76a20 20 0 0 0-20-20h-24V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v16H96a20 20 0 0 0-20 20v60a20 20 0 0 0 20 20m48-112h24v12h-24Zm-44 36h112v52H100Zm-8 144a20 20 0 1 1-20-20a20 20 0 0 1 20 20m144 0a20 20 0 1 1-20-20a20 20 0 0 1 20 20m16-44a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h4V77L15.51 56.49a12 12 0 0 1 17-17l21.63 21.68A19.86 19.86 0 0 1 60 75.31V168h180a12 12 0 0 1 12 12");
}
</style><path class="egokoxs_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trolley-suitcase-bold"} {...others} />);
}

export default Component;
