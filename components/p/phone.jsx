import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vaxgtcc0l.css';
import '../../css/n/nm-wo0bie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="vaxgtcc0l"/><path class="nm-wo0bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:phone"} {...others} />);
}

export default Component;
