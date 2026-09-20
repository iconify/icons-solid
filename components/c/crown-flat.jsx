import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4ahqjb5a.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p4ahqjb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:crown-flat"} {...others} />);
}

export default Component;
