import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq_tbluok.css';
import '../../css/q/qcret227i.css';
import '../../css/z/zsyn02zgx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uq_tbluok"/><path clip-rule="evenodd" class="qcret227i"/><path clip-rule="evenodd" class="zsyn02zgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bitcoin-circle-1-solid"} {...others} />);
}

export default Component;
