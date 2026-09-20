import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cec7lzbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cec7lzbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:folder-24"} {...others} />);
}

export default Component;
