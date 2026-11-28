import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/argxp8b7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="argxp8b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:messages"} {...others} />);
}

export default Component;
