import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt7ztxbrk.css';
import '../../css/k/k-_v8bbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dt7ztxbrk"/><path class="k-_v8bbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:hard-disk-storage-filled"} {...others} />);
}

export default Component;
