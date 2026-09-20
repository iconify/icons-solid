import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/n/nrjwegeha.css';
import '../../css/u/u0o58acjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="nrjwegeha"/><path class="u0o58acjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mobile-shortcut"} {...others} />);
}

export default Component;
