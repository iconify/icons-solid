import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qgxlicbay.css';
import '../../css/n/nvph-moyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qgxlicbay"/><path class="nvph-moyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-favorite"} {...others} />);
}

export default Component;
