import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a8bwf-6ur.css';
import '../../css/u/uf4tivbrb.css';
import '../../css/t/tr5bubbay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="a8bwf-6ur"/><path class="uf4tivbrb"/><path class="tr5bubbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:psi-capital"} {...others} />);
}

export default Component;
