import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zft_32b5b.css';
import '../../css/d/dx0ia8cmc.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsTi0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsTi0)"><path class="zft_32b5b"/><path class="dx0ia8cmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ti"} {...others} />);
}

export default Component;
