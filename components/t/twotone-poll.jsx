import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikw92mbgj {
  fill: currentColor;
  d: path("M5 19h14V5H5zm10-6h2v4h-2zm-4-6h2v10h-2zm-4 3h2v7H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.manzhlb6g {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z");
}
</style><path class="ikw92mbgj"/><path class="manzhlb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-poll"} {...others} />);
}

export default Component;
