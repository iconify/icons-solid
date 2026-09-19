import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/i/iuqa1tb0d.css';
import '../../css/j/jsx4299_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="iuqa1tb0d"/><path class="jsx4299_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:marker"} {...others} />);
}

export default Component;
