import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_z7jbbuz.css';
import '../../css/g/gxjodwbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o_z7jbbuz"/><path class="gxjodwbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:cloud-upload-fill"} {...others} />);
}

export default Component;
