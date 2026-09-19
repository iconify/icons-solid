import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rep20fq8t {
  fill: currentColor;
  d: path("M17 4h2v16h-2zM2 2v20h13V2zm19 16h1.5V6H21z");
}
</style><path class="rep20fq8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-web-stories"} {...others} />);
}

export default Component;
