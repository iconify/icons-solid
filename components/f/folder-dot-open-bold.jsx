import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw7lxg0ts.css';
import '../../css/n/n7p431bil.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yw7lxg0ts"/><path class="n7p431bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-dot-open-bold"} {...others} />);
}

export default Component;
