import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t6gpi-fjy.css';
import '../../css/g/g7gexobhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t6gpi-fjy"/><path class="g7gexobhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:headphones-1"} {...others} />);
}

export default Component;
