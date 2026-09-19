import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzgz5ob4j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gzgz5ob4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pentagon-down-solid"} {...others} />);
}

export default Component;
