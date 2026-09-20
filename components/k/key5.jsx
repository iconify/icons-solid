import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i2-yz2bec.css';
import '../../css/s/sno6d0bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i2-yz2bec"/><path class="sno6d0bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:key5"} {...others} />);
}

export default Component;
