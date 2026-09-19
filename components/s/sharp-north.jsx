import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edwti2b0g {
  fill: currentColor;
  d: path("m5 9l1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z");
}
</style><path class="edwti2b0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-north"} {...others} />);
}

export default Component;
