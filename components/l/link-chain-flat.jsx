import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pghk_6agr.css';
import '../../css/b/bjjmfybva.css';
import '../../css/g/g2pydqbhs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pghk_6agr"/><path class="bjjmfybva"/><path clip-rule="evenodd" class="g2pydqbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:link-chain-flat"} {...others} />);
}

export default Component;
