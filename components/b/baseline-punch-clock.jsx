import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hgix6k0rl {
  fill: currentColor;
  d: path("M12.5 11.5h-1v2.71l1.64 1.64l.71-.71l-1.35-1.35z");
}

.vxnzx6r9m {
  fill: currentColor;
  d: path("M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}
</style><path class="vxnzx6r9m"/><path class="hgix6k0rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-punch-clock"} {...others} />);
}

export default Component;
