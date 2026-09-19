import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hlln3whts.css';
import '../../css/z/z6r511b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hlln3whts"/><path class="z6r511b4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-05"} {...others} />);
}

export default Component;
