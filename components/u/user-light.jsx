import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/ic08mpydp.css';
import '../../css/f/f439rob6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="ic08mpydp"/><circle class="f439rob6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-light"} {...others} />);
}

export default Component;
