import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/av00m1f8o.css';
import '../../css/e/e6kbp_ktm.css';
import '../../css/p/pn48gtbgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="av00m1f8o"/><circle class="e6kbp_ktm"/><circle class="pn48gtbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hat-glasses"} {...others} />);
}

export default Component;
