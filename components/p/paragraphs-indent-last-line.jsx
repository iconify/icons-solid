import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypaqnab8w.css';
import '../../css/l/lsoorebqt.css';
import '../../css/h/hd4evdbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ypaqnab8w"/><path class="lsoorebqt"/><path class="hd4evdbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:paragraphs-indent-last-line"} {...others} />);
}

export default Component;
