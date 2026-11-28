import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9p-jgu8o.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vthn-7s8a.css';
import '../../css/j/jg8edzpch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c9p-jgu8o secondary"/><g class="dt0cm9dhy primary"><path class="vthn-7s8a"/><path class="jg8edzpch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:exclude-duo"} {...others} />);
}

export default Component;
