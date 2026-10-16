import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glsz6lb6o.css';
import '../../css/l/lkhxdccgi.css';
import '../../css/d/d29tb6b3e.css';
import '../../css/t/t0vmepbiv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="glsz6lb6o"/><path class="lkhxdccgi"/><path class="d29tb6b3e"/><path class="t0vmepbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mosque-20"} {...others} />);
}

export default Component;
