import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0n8p_5eu.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="z0n8p_5eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pen-tool-solid"} {...others} />);
}

export default Component;
