import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s-1dwub1e {
  fill: currentColor;
  d: path("M248 128.72A87.74 87.74 0 0 1 222.41 190a4 4 0 0 1-5.77-.16L103.78 65.67a4 4 0 0 1 .39-5.76A87.82 87.82 0 0 1 160.87 40c48.28.47 87.51 40.43 87.13 88.72M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18l-.06.11A64 64 0 0 0 8 153c.53 35.12 29.84 63 65 63h87a87.7 87.7 0 0 0 31.78-5.95l10.3 11.33a8 8 0 0 0 11.33.52a8.32 8.32 0 0 0 .29-11.52Z");
}
</style><path class="s-1dwub1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cloud-slash-fill"} {...others} />);
}

export default Component;
