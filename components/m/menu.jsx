import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bv_l28bpi.css';
import '../../css/p/pailr-q6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><rect class="bv_l28bpi"/><rect class="pailr-q6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:menu"} {...others} />);
}

export default Component;
