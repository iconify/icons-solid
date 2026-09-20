import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iekmybbsr.css';
import '../../css/q/qhzr4ibtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iekmybbsr"/><path class="qhzr4ibtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:medical-search-diagnosis"} {...others} />);
}

export default Component;
