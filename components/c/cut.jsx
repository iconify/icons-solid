import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pn48gtbgw.css';
import '../../css/f/f-n8rxkai.css';
import '../../css/e/e6kbp_ktm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="pn48gtbgw"/><path class="f-n8rxkai"/><circle class="e6kbp_ktm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:cut"} {...others} />);
}

export default Component;
