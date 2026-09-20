import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_cyjh5hd.css';
import '../../css/r/r7zmfvpfr.css';
import '../../css/c/c8fu6hbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n_cyjh5hd"><path class="r7zmfvpfr"/><path class="c8fu6hbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:toggle-on-line"} {...others} />);
}

export default Component;
