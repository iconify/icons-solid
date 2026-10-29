import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzgfacbmm.css';
import '../../css/j/jci34lbfa.css';
import '../../css/v/vrhyijbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzgfacbmm"/><path class="jci34lbfa"/><path class="vrhyijbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:book-open"} {...others} />);
}

export default Component;
