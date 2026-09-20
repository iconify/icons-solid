import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.he4rs9y1v {
  fill: var(--svg-color--757f3f, #757f3f);
}

.kz4xjbb2s {
  cx: 64px;
  cy: 110.88px;
  r: 15.31px;
}

.qkq7nckyv {
  cx: 64px;
  cy: 17.12px;
  r: 15.31px;
}

.w2g94l96y {
  d: path("M8.57 51.69c-4.36 0-7.92 3.56-7.92 7.92v8.78c0 4.36 3.56 7.92 7.92 7.92h110.86c4.36 0 7.92-3.56 7.92-7.92v-8.78c0-4.36-3.56-7.92-7.92-7.92z");
}
</style><g class="he4rs9y1v"><circle class="qkq7nckyv"/><circle class="kz4xjbb2s"/><path class="w2g94l96y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:division-sign"} {...others} />);
}

export default Component;
