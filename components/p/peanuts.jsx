import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/n/ntb7ocbur.css';
import '../../css/d/dxgettuwf.css';
import '../../css/y/ykr7lgjqh.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="ntb7ocbur"/><path class="dxgettuwf"/></g><path class="ykr7lgjqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:peanuts"} {...others} />);
}

export default Component;
