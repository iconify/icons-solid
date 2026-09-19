import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5z957buc.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="o5z957buc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:caret-down"} {...others} />);
}

export default Component;
