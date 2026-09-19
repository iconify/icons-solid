import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jeo6el_jt.css';
import '../../css/o/op5c-pbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jeo6el_jt"/><path class="op5c-pbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-analyse"} {...others} />);
}

export default Component;
