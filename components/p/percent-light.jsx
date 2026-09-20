import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/cidikfavb.css';
import '../../css/x/xn6ppk3eg.css';
import '../../css/x/xg67yobqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="cidikfavb"/><circle class="xn6ppk3eg"/><circle class="xg67yobqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:percent-light"} {...others} />);
}

export default Component;
