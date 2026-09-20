import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.exx1r2bik {
  fill: currentColor;
  d: path("M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m53.66 93.66l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="exx1r2bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:messenger-logo-fill"} {...others} />);
}

export default Component;
