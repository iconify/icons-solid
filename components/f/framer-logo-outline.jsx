import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqt6cf4sl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="framer-logo-outline"><path class="(Stroke) Vector fqt6cf4sl" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:framer-logo-outline"} {...others} />);
}

export default Component;
