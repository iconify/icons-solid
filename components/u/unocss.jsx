import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-q81khvm.css';
import '../../css/t/tqfna8b9r.css';
import '../../css/n/nxg4_6n1c.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="k-q81khvm"/><path class="tqfna8b9r"/><path class="nxg4_6n1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:unocss"} {...others} />);
}

export default Component;
