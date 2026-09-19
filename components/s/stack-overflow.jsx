import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr7b1pcrx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fr7b1pcrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:stack-overflow"} {...others} />);
}

export default Component;
