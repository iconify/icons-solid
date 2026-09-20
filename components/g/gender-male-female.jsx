import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxyv9z9mh.css';
import '../../css/g/gmtt25bwa.css';
import '../../css/k/kh__y6vsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="yxyv9z9mh"><path class="gmtt25bwa"/><path class="kh__y6vsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:gender-male-female"} {...others} />);
}

export default Component;
