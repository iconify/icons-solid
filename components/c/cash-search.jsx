import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruxjphsni.css';
import '../../css/v/vstk5-qrh.css';
import '../../css/b/b4z-br47a.css';
import '../../css/y/y7_fmvbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ruxjphsni"/><path class="vstk5-qrh"/><path class="b4z-br47a"/><path class="y7_fmvbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cash-search"} {...others} />);
}

export default Component;
