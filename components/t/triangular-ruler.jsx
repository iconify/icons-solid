import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.pnrtmablz {
  fill: var(--svg-color--ffce31, #ffce31);
  d: path("M.7 61.8C-.5 63-.1 64 1.6 64h59.3c1.7 0 3.1-1.4 3.1-3.1V1.6c0-1.7-1-2.1-2.2-.9zm49.1-15c0 1.7-1.4 3.1-3.1 3.1h-11c-1.7 0-2.1-1-.9-2.2l12.8-12.8c1.2-1.2 2.2-.8 2.2.9z");
}

.u31rklkhc {
  fill: var(--svg-color--89664c, #89664c);
  d: path("M2.4 61.3h1V64h-1zm2.9 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1zm3.1 2.3h1V64h-1zm3 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1zm3.1 2.3h1V64h-1zm3 0h1V64h-1zm3 0h1V64h-1zm2.9-2.3h1v5h-1zm3.2 2.3h1V64h-1zm2.9 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1zm3.1 2.3h1V64h-1zm3 0h1V64h-1zm3 0h1V64h-1zm3-2.3h1v5h-1z");
}
</style><path class="pnrtmablz"/><path class="u31rklkhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:triangular-ruler"} {...others} />);
}

export default Component;
