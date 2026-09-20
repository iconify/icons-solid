import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdo-2ccwy.css';
import '../../css/x/xqxc9ub9u.css';
import '../../css/o/otk84v7nh.css';
import '../../css/x/xmv0ri_ca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="wdo-2ccwy"/><path class="xqxc9ub9u"/><path class="otk84v7nh"/><path class="xmv0ri_ca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:watch"} {...others} />);
}

export default Component;
