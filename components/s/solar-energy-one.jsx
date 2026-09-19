import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fw-s9wb3i.css';
import '../../css/f/fb4plhbwx.css';
import '../../css/r/rirssofcv.css';
import '../../css/d/d6u1tcc9r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fw-s9wb3i"/><path class="fb4plhbwx"/><circle class="rirssofcv"/><path class="d6u1tcc9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:solar-energy-one"} {...others} />);
}

export default Component;
