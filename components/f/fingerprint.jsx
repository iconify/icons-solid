import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-81f5d_y.css';
import '../../css/k/kntm962du.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z-81f5d_y"/><path class="kntm962du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:fingerprint"} {...others} />);
}

export default Component;
