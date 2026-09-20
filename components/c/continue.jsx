import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1v5f7rwx.css';
import '../../css/b/b62b46bsa.css';

const viewBox = {"width":300,"height":300};
const content = `<g class="ft5dv1b6b"><path class="f1v5f7rwx"/><path class="b62b46bsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:continue"} {...others} />);
}

export default Component;
