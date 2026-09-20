import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k2ic8-bxv.css';
import '../../css/q/q9nnwmbvy.css';
import '../../css/i/ibebuq93r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k2ic8-bxv"/><path class="q9nnwmbvy"/><path class="ibebuq93r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:view-document-files"} {...others} />);
}

export default Component;
