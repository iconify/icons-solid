import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syhi_kb3g.css';
import '../../css/n/n47jdbbqa.css';
import '../../css/p/py966wb9m.css';
import '../../css/l/lyb69fbfd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="syhi_kb3g"/><path class="n47jdbbqa"/><path class="py966wb9m"/><path class="lyb69fbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:paintbrush"} {...others} />);
}

export default Component;
