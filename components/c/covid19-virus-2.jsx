import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/th0y6sblu.css';
import '../../css/l/lidv3ugmq.css';
import '../../css/h/h160k9b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="th0y6sblu"/><path class="lidv3ugmq"/><path class="h160k9b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-2"} {...others} />);
}

export default Component;
