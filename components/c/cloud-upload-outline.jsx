import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxjodwbrk.css';
import '../../css/e/e132nkbef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxjodwbrk"/><path class="e132nkbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:cloud-upload-outline"} {...others} />);
}

export default Component;
