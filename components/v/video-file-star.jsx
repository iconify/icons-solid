import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tsodojq_y.css';
import '../../css/f/fqkgllbrl.css';
import '../../css/m/m6tzai20r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tsodojq_y"/><path class="fqkgllbrl"/><path class="m6tzai20r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-file-star"} {...others} />);
}

export default Component;
