import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xklz5tb0i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="xklz5tb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cloud-share-solid"} {...others} />);
}

export default Component;
