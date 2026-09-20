import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpeiluhhu.css';
import '../../css/d/dy05g7igr.css';
import '../../css/u/uzfxnvf_x.css';
import '../../css/i/iry56bq6m.css';
import '../../css/d/d06klsb4a.css';
import '../../css/i/ivo-c6ama.css';

const viewBox = {"width":481.74,"height":237.51};
const content = `<defs><clipPath id="SVGPWKhYdYq"><path class="vpeiluhhu"/></clipPath></defs><path class="dy05g7igr"/><g clip-path="url(#SVGPWKhYdYq)" transform="matrix(9.35 0 0 -9.35 -245.22 7638.48)"><path class="uzfxnvf_x"/><path class="iry56bq6m"/></g><path class="d06klsb4a"/><path class="ivo-c6ama"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:credit-suisse"} {...others} />);
}

export default Component;
