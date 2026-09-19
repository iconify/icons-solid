import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kimoq7uac.css';

const viewBox = {"width":960,"height":960};
const content = `<path class="kimoq7uac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:verticalborder"} {...others} />);
}

export default Component;
