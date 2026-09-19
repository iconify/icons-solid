import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yi0niqb3k.css';
import '../../css/z/zol1jwuww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yi0niqb3k"/><path class="zol1jwuww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:airplane-take-off-02"} {...others} />);
}

export default Component;
