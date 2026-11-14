import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/ajlilwgdm.css';
import '../../css/p/pxlu8njnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="ajlilwgdm"/><path class="pxlu8njnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:search"} {...others} />);
}

export default Component;
