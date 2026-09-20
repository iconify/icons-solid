import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jqm63dyww.css';
import '../../css/m/mvo2n9bru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="jqm63dyww"/><path class="mvo2n9bru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:search"} {...others} />);
}

export default Component;
