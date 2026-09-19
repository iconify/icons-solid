import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jduyn0-zh.css';
import '../../css/m/mkolcyb2z.css';
import '../../css/f/f81lr3bmn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="jduyn0-zh"/><circle class="mkolcyb2z"/><path class="f81lr3bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radio"} {...others} />);
}

export default Component;
