import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au6clhbxu.css';
import '../../css/c/cpvng1bhd.css';
import '../../css/n/nbpor1b9l.css';

const viewBox = {"width":500,"height":500};
const content = `<g class="au6clhbxu"><path class="cpvng1bhd"/><path class="nbpor1b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:nix"} {...others} />);
}

export default Component;
