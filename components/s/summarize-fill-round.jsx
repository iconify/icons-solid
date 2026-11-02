import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y6u8dutfm {
  fill: currentColor;
  d: path("M21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm-9 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm4 1a1 1 0 0 1 2 0c0 1.452 1.548 3 3 3a1 1 0 0 1 0 2c-.774 0-1.508.422-2.043.957a3.5 3.5 0 0 0-.707.997c-.153.328-.25.683-.25 1.046a1 1 0 0 1-2 0c0-.363-.097-.718-.25-1.046a3.5 3.5 0 0 0-.707-.997a3.5 3.5 0 0 0-.997-.707A2.5 2.5 0 0 0 13 16a1 1 0 0 1 0-2c1.452 0 3-1.548 3-3m-8 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="y6u8dutfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:summarize-fill-round"} {...others} />);
}

export default Component;
