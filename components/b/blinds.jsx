import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/u/ufl3gnb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="cql1pwtbp"/><path class="ufl3gnb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blinds"} {...others} />);
}

export default Component;
