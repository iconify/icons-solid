import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ox62ppbtl {
  cx: 11.5px;
  cy: 14.5px;
  r: 1.5px;
  fill: currentColor;
}

.sf-yb8bcz {
  fill: currentColor;
  d: path("M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm1.04 17.45l-1.88-1.88c-1.33.71-3.01.53-4.13-.59a3.495 3.495 0 0 1 0-4.95a3.495 3.495 0 0 1 4.95 0a3.48 3.48 0 0 1 .59 4.13l1.88 1.88zM13 9V3.5L18.5 9z");
}
</style><path class="sf-yb8bcz"/><circle class="ox62ppbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-plagiarism"} {...others} />);
}

export default Component;
