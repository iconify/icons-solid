import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szmhgzb0a.css';
import '../../css/p/pphqfabzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szmhgzb0a"/><path clip-rule="evenodd" class="pphqfabzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-dot-open-outline"} {...others} />);
}

export default Component;
