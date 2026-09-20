import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh9_25k9p.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="yh9_25k9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-curvy-up-down-1-solid"} {...others} />);
}

export default Component;
