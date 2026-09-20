import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4zv9fb5r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h4zv9fb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:folder-check-solid"} {...others} />);
}

export default Component;
