import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l4krmkb6l.css';
import '../../css/l/lfa6seb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="l4krmkb6l"/><rect class="lfa6seb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:clipboard"} {...others} />);
}

export default Component;
