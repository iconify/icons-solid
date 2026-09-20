import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvzotzb6d.css';
import '../../css/j/jffox2z3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gvzotzb6d"/><path class="jffox2z3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:note-with-text"} {...others} />);
}

export default Component;
