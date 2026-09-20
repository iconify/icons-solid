import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/nqzufeb8v.css';
import '../../css/a/avli89ttj.css';
import '../../css/j/jhqkx57ed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="nqzufeb8v"/><path class="avli89ttj"/><path class="jhqkx57ed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:qr-code"} {...others} />);
}

export default Component;
