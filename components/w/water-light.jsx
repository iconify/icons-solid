import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/iddxiwbab.css';
import '../../css/a/ae3eb1bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="iddxiwbab"/><path class="ae3eb1bqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:water-light"} {...others} />);
}

export default Component;
