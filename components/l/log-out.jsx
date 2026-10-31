import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y12vu_lez.css';
import '../../css/q/qurrn3yiv.css';
import '../../css/z/z5fkfhvps.css';
import '../../css/c/ct-6f2bee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y12vu_lez"/><path class="qurrn3yiv wm-shadow"/><path class="z5fkfhvps"/><path class="ct-6f2bee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:log-out"} {...others} />);
}

export default Component;
