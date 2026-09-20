import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa96fi7lp.css';
import '../../css/a/am1t0tb4t.css';
import '../../css/n/nfszf7bnc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xa96fi7lp"/><path class="am1t0tb4t"/><path clip-rule="evenodd" class="nfszf7bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:floppy-disk-solid"} {...others} />);
}

export default Component;
