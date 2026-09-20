import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vprg18qvn.css';

const viewBox = {"width":290,"height":79};
const content = `<path clip-rule="evenodd" class="vprg18qvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:polygon-io"} {...others} />);
}

export default Component;
