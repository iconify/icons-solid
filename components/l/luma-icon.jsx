import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":296};
const content = `<style>.el28nubaq {
  d: path("m0 221.965l128 73.989V0L0 73.988z");
}

.pqz4-3bcn {
  d: path("m128 295.954l128-73.989l-128-73.988L0 221.965z");
}

.zl_6kdbye {
  fill-opacity: var(--svg-fill-opacity--0-65, 0.65);
}
</style><g class="zl_6kdbye"><path class="el28nubaq"/><path class="pqz4-3bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:luma-icon"} {...others} />);
}

export default Component;
