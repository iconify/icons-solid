import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lfuti38fr.css';
import '../../css/b/b9b0rvi9w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="lfuti38fr"/><path class="b9b0rvi9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:printer-wireless"} {...others} />);
}

export default Component;
