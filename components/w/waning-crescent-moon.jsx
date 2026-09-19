import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.jiskflbtw {
  fill: currentColor;
  d: path("M32.001 2h-.003C15.431 2 2 15.432 2 32s13.431 30 29.998 30h.003C48.569 62 62 48.568 62 32S48.569 2 32.001 2M4 32C4 19.104 12.722 8.25 24.585 4.999C18.913 9.86 15.002 20.124 15.002 32s3.911 22.14 9.583 27.001C12.722 55.75 4 44.896 4 32");
}
</style><path class="jiskflbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:waning-crescent-moon"} {...others} />);
}

export default Component;
