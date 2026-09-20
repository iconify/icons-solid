import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfo6y1b6f.css';
import '../../css/s/sflhpq2ep.css';
import '../../css/d/dy0pnwb7i.css';
import '../../css/a/abbea4hvh.css';

const viewBox = {"width":256,"height":296};
const content = `<path class="zfo6y1b6f"/><path class="sflhpq2ep"/><path class="dy0pnwb7i"/><path class="abbea4hvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:preact"} {...others} />);
}

export default Component;
