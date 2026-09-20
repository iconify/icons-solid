import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c94uocc5l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="c94uocc5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:flower-solid"} {...others} />);
}

export default Component;
