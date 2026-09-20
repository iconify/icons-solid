import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7sl9q-7g.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="f7sl9q-7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:wifi-disabled-solid"} {...others} />);
}

export default Component;
