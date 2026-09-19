import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wp0beln3c.css';
import '../../css/v/viz6ex4le.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wp0beln3c"/><path class="viz6ex4le"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:login-01"} {...others} />);
}

export default Component;
