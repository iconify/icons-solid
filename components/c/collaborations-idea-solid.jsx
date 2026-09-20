import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk3psxb0p.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="gk3psxb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:collaborations-idea-solid"} {...others} />);
}

export default Component;
