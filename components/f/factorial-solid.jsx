import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu8sa6bou.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="hu8sa6bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:factorial-solid"} {...others} />);
}

export default Component;
