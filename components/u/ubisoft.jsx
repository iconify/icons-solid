import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a98m-pyyq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a98m-pyyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:ubisoft"} {...others} />);
}

export default Component;
