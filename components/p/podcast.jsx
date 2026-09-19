import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa4ogyunu.css';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvu6wz0nf.css';
import '../../css/t/t1tgaf0_s.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGeNSNdbqp" class="xa4ogyunu"/></defs><g class="hntgybcog"><use href="#SVGeNSNdbqp"/><use href="#SVGeNSNdbqp"/><path class="jvu6wz0nf"/><path class="t1tgaf0_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:podcast"} {...others} />);
}

export default Component;
