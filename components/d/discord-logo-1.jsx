import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oc4go7b1e.css';
import '../../css/r/rfjhzl2az.css';
import '../../css/m/my1ogs_oj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="oc4go7b1e"/><path class="rfjhzl2az"/><path class="my1ogs_oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:discord-logo-1"} {...others} />);
}

export default Component;
