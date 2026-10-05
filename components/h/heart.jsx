import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/ce61-k2jd.css';
import '../../css/y/y9biqacmn.css';
import '../../css/b/beywe9bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ce61-k2jd"/><path class="y9biqacmn"/><path class="beywe9bnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:heart"} {...others} />);
}

export default Component;
