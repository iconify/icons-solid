import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x0c9_4bxl.css';
import '../../css/g/gqtb--bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x0c9_4bxl"/><path class="gqtb--bxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-stack-line-duotone"} {...others} />);
}

export default Component;
