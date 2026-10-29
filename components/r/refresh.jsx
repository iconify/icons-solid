import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfkv88_ec.css';
import '../../css/g/gqdbp76kz.css';
import '../../css/o/ou0h1wrmu.css';
import '../../css/j/jed0fvbtl.css';
import '../../css/o/o--fc3d9r.css';
import '../../css/b/b1p6yejra.css';
import '../../css/e/e4q6ybbss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pfkv88_ec wm-a"/><path class="gqdbp76kz wm-a"/><path class="ou0h1wrmu wm-a"/><path class="jed0fvbtl wm-shine"/><path class="o--fc3d9r wm-a"/><path class="b1p6yejra wm-a"/><path class="e4q6ybbss wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:refresh"} {...others} />);
}

export default Component;
