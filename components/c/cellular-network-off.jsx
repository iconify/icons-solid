import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf8asjb5u.css';
import '../../css/x/xxw0qmgoi.css';
import '../../css/o/oktq18ber.css';
import '../../css/u/u6u2xsbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vf8asjb5u"/><circle transform="rotate(90 12 9.1)" class="xxw0qmgoi"/><circle transform="rotate(90 12 9.1)" class="oktq18ber"/><path class="u6u2xsbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cellular-network-off"} {...others} />);
}

export default Component;
