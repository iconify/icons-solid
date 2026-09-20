import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wvnvljbjf.css';
import '../../css/b/b5gm4lbec.css';
import '../../css/t/t3jpkjuhj.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="wvnvljbjf"/><path class="b5gm4lbec"/><path class="t3jpkjuhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:discount"} {...others} />);
}

export default Component;
