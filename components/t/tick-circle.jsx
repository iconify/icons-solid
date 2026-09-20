import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-e4dnbyj.css';
import '../../css/w/w5ov63m_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p-e4dnbyj"/><path class="w5ov63m_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tick-circle"} {...others} />);
}

export default Component;
