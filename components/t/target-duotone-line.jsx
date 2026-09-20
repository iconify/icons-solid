import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch19v3bee.css';
import '../../css/v/vi6jplbfg.css';
import '../../css/y/yg3s2lbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ch19v3bee"/><path clip-rule="evenodd" class="vi6jplbfg"/><path class="yg3s2lbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:target-duotone-line"} {...others} />);
}

export default Component;
