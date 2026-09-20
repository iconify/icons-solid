import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/o/o9j0d4xbo.css';
import '../../css/i/i-vmawbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="o9j0d4xbo"/><path class="i-vmawbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:tablet"} {...others} />);
}

export default Component;
