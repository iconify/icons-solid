import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu31v9b7e.css';
import '../../css/r/rcmxi1bbi.css';
import '../../css/j/j3c9lmdib.css';
import '../../css/n/nu4n5odae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qu31v9b7e"/><path class="rcmxi1bbi"/><path class="j3c9lmdib"/><path class="nu4n5odae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:camera"} {...others} />);
}

export default Component;
