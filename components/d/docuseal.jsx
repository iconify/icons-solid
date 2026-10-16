import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej0w98jpu.css';
import '../../css/m/mi3skhlne.css';
import '../../css/t/tcg1rxmwr.css';

const viewBox = {"width":180,"height":180};
const content = `<circle class="ej0w98jpu"/><path class="mi3skhlne"/><circle class="tcg1rxmwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:docuseal"} {...others} />);
}

export default Component;
