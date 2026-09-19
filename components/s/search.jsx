import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rr-qpvb5s.css';
import '../../css/x/xeenv-azh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="rr-qpvb5s"/><path class="xeenv-azh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:search"} {...others} />);
}

export default Component;
