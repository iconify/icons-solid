import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h78vvcc3i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h78vvcc3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:shield-1-remix"} {...others} />);
}

export default Component;
