import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pxy6ktbxd {
  fill: currentColor;
  d: path("M200 76a52 52 0 0 0-27.66 96H83.66A52 52 0 1 0 56 180h144a52 52 0 0 0 0-104M12 128a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m188 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44");
}
</style><path class="pxy6ktbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:voicemail-thin"} {...others} />);
}

export default Component;
