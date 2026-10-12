import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6e0xdb9u.css';
import '../../css/z/z-0ig2bma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l6e0xdb9u"/><path class="z-0ig2bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ampersand"} {...others} />);
}

export default Component;
