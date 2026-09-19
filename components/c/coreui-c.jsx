import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4mh9zb-o.css';
import '../../css/b/bpl1kribr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c4mh9zb-o"/><path class="bpl1kribr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:coreui-c"} {...others} />);
}

export default Component;
