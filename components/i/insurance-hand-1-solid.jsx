import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8az5tb5o.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a8az5tb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:insurance-hand-1-solid"} {...others} />);
}

export default Component;
