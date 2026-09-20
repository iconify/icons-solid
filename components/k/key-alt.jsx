import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/x/x8eiw_bwt.css';
import '../../css/n/nc5jv0bhh.css';
import '../../css/w/wkienvanw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="x8eiw_bwt"/><circle class="nc5jv0bhh"/><path class="wkienvanw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:key-alt"} {...others} />);
}

export default Component;
