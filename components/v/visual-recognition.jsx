import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccqy6rbku.css';
import '../../css/v/vvwnsy9um.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="ccqy6rbku"/><path class="vvwnsy9um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:visual-recognition"} {...others} />);
}

export default Component;
