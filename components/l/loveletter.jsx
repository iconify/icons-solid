import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1v9vfuti.css';
import '../../css/w/w99tqt19m.css';
import '../../css/i/im_5uab-x.css';
import '../../css/f/fkpzunb7z.css';
import '../../css/b/bob0rw7ll.css';
import '../../css/l/l6h7gmb7i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a1v9vfuti"/><path class="w99tqt19m"/><path class="im_5uab-x"/><path class="fkpzunb7z"/><path class="bob0rw7ll"/><path class="l6h7gmb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:loveletter"} {...others} />);
}

export default Component;
