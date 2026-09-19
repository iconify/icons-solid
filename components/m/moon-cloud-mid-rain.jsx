import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gq80vcsfa.css';
import '../../css/c/cb2szt4ki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="gq80vcsfa"/><path class="cb2szt4ki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-cloud-mid-rain"} {...others} />);
}

export default Component;
