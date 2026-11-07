import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u90m3kb-a.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u90m3kb-a"/><path clip-rule="evenodd" class="pzmtr-buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-down-outline"} {...others} />);
}

export default Component;
