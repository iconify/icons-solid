import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7lx_xbxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y7lx_xbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sticky-note-fill"} {...others} />);
}

export default Component;
