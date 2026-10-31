import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xdgvewb6c.css';
import '../../css/o/oap2wabig.css';
import '../../css/f/fq9dvidjm.css';
import '../../css/w/wz89zl6ee.css';
import '../../css/d/d7q5j8b0v.css';
import '../../css/h/hga29tbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xdgvewb6c"/><path class="oap2wabig wm-shadow"/><path class="fq9dvidjm"/><path class="wz89zl6ee"/><path class="d7q5j8b0v"/><path class="hga29tbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:clover"} {...others} />);
}

export default Component;
