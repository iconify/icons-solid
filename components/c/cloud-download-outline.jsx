import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tahbz4kss.css';
import '../../css/n/n6c26r64u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tahbz4kss"/><path clip-rule="evenodd" class="n6c26r64u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:cloud-download-outline"} {...others} />);
}

export default Component;
