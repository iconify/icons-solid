import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vswmk0boe.css';
import '../../css/q/qynf6jdgz.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vswmk0boe"/><path class="qynf6jdgz"/><path class="dno4_nblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal-medium-two-tone"} {...others} />);
}

export default Component;
