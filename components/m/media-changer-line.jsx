import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qchdvmbcp.css';
import '../../css/c/cwo24bbfo.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="qchdvmbcp"/><path class="cwo24bbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:media-changer-line"} {...others} />);
}

export default Component;
