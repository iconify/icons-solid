import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/zwtw4ybnw.css';
import '../../css/f/fr_tmn9fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="zwtw4ybnw"/><circle class="fr_tmn9fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:camera"} {...others} />);
}

export default Component;
