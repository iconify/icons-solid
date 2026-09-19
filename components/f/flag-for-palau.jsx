import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.t719z7baa {
  fill: var(--svg-color--4189dd, #4189dd);
  d: path("M64 44c0 6.075-3.373 11-10 11H10C3.373 55 0 50.075 0 44V22c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z");
}

.yy-kfybew {
  cx: 25.654px;
  cy: 32.654px;
  r: 14.15px;
  fill: var(--svg-color--f9cb38, #f9cb38);
}
</style><path class="t719z7baa"/><circle class="yy-kfybew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:flag-for-palau"} {...others} />);
}

export default Component;
