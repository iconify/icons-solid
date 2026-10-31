import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qo7jx2b1g.css';
import '../../css/j/jjcophiqv.css';
import '../../css/c/c9itmrbal.css';
import '../../css/a/a9qtcg50u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qo7jx2b1g wm-shadow"/><path class="jjcophiqv wm-shadow"/><path class="c9itmrbal"/><path class="a9qtcg50u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:feather"} {...others} />);
}

export default Component;
