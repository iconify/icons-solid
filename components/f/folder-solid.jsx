import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxz2te--u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qxz2te--u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:folder-solid"} {...others} />);
}

export default Component;
