import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wh76sqbbo.css';
import '../../css/w/wvekrthch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wh76sqbbo"/><path class="wvekrthch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:envelope-letter"} {...others} />);
}

export default Component;
