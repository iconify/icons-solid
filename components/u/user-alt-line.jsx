import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rhjky3n3q.css';
import '../../css/b/bos1t2i0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rhjky3n3q"/><path class="bos1t2i0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:user-alt-line"} {...others} />);
}

export default Component;
