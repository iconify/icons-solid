import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed88bk2gg.css';
import '../../css/c/cnpgasf1a.css';
import '../../css/y/y7dn9kh7h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ed88bk2gg"><path class="cnpgasf1a"/><path class="y7dn9kh7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:warp-light"} {...others} />);
}

export default Component;
