import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bf5_xfbow.css';
import '../../css/d/die8b53tm.css';
import '../../css/l/lx9jh7bof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bf5_xfbow"/><path class="die8b53tm"/><path class="lx9jh7bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:ribbon"} {...others} />);
}

export default Component;
