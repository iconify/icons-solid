import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls8x7ynpf.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/m/m4t4e7hde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ls8x7ynpf"/><path class="gsvrl7yuk"/><path class="m4t4e7hde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-currency"} {...others} />);
}

export default Component;
