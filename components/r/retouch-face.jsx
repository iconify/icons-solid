import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ul2rj4exd.css';
import '../../css/q/qvnxlsb-n.css';
import '../../css/y/ykn6d2n6l.css';
import '../../css/r/rw3bidcsz.css';
import '../../css/n/n7gs3-3ix.css';
import '../../css/b/b5j5pggls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ul2rj4exd"/><path class="qvnxlsb-n"/><path class="ykn6d2n6l"/><path class="rw3bidcsz"/><path class="n7gs3-3ix"/><path class="b5j5pggls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:retouch-face"} {...others} />);
}

export default Component;
