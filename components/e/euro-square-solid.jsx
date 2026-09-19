import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbknc0bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jbknc0bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:euro-square-solid"} {...others} />);
}

export default Component;
