import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd_-azbqb.css';
import '../../css/c/c4j2u85_n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zd_-azbqb"/><path class="c4j2u85_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-military-civil"} {...others} />);
}

export default Component;
