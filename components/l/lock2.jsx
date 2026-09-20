import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z2lxv6b1e.css';
import '../../css/g/g92jt5b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z2lxv6b1e"/><path class="g92jt5b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock2"} {...others} />);
}

export default Component;
