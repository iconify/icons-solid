import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pocy658dn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.465 6.293l2.828-2.828q.878-.879 2.121-.879t2.121.879q.879.878.879 2.121t-.879 2.121l-2.828 2.828q-.603.604-1.379.793q-.189.776-.793 1.379l-2.828 2.828q-.603.604-1.379.793q-.189.776-.793 1.379l-2.828 2.828q-.878.879-2.121.879t-2.121-.879q-.879-.878-.879-2.121t.879-2.121l2.828-2.828q.603-.604 1.379-.793q.189-.776.793-1.379l2.828-2.828q.603-.604 1.379-.793q.189-.776.793-1.379");
}
</style><path class="pocy658dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:attack-chain"} {...others} />);
}

export default Component;
