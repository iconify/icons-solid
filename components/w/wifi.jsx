import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl4koqbue.css';
import '../../css/s/s2rvhwwyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yl4koqbue"/><path class="s2rvhwwyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:wifi"} {...others} />);
}

export default Component;
