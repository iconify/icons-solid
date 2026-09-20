import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6ox5eb0v.css';
import '../../css/b/b00q3hb-i.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zv4wmrb6f.css';
import '../../css/x/xs8nfnbka.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q6ox5eb0v"/><path class="b00q3hb-i"/><g class="ij2x_72vy"><path class="zv4wmrb6f"/><path class="xs8nfnbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bread"} {...others} />);
}

export default Component;
