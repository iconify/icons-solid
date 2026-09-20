import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eju1qufva.css';
import '../../css/q/qele91b3l.css';
import '../../css/h/hobc68bet.css';
import '../../css/v/vdnsg9ohj.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="eju1qufva"/><path class="qele91b3l"/><circle class="hobc68bet"/><circle class="vdnsg9ohj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:android"} {...others} />);
}

export default Component;
