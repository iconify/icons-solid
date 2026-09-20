import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntry5bc5r.css';
import '../../css/y/ybrt331fk.css';
import '../../css/d/d6vn-ssir.css';
import '../../css/q/qoyancbha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ntry5bc5r"/><circle class="ybrt331fk"/><path class="d6vn-ssir"/><path class="qoyancbha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:music"} {...others} />);
}

export default Component;
