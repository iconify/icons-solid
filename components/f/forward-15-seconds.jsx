import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yvkvpilzx.css';
import '../../css/f/fbtvzqbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yvkvpilzx"/><path class="fbtvzqbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forward-15-seconds"} {...others} />);
}

export default Component;
