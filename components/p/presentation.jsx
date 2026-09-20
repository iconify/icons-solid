import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nfn2c-t1u.css';
import '../../css/c/cdvbk1ody.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="nfn2c-t1u"/><path class="cdvbk1ody"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:presentation"} {...others} />);
}

export default Component;
