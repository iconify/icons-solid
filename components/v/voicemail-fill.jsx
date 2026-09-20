import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z49goibuz {
  fill: currentColor;
  d: path("M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112M56 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40m144 0a40 40 0 1 1 40-40a40 40 0 0 1-40 40m24-40a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-144 0a24 24 0 1 1-24-24a24 24 0 0 1 24 24");
}
</style><path class="z49goibuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:voicemail-fill"} {...others} />);
}

export default Component;
