import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/y/y-px61uke.css';
import '../../css/k/k45hr2bcn.css';
import '../../css/d/d08trebzr.css';
import '../../css/i/i5pb2cb6i.css';
import '../../css/t/t02h6lo4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="y-px61uke"/><circle class="k45hr2bcn"/><circle class="d08trebzr"/><circle class="i5pb2cb6i"/><path class="t02h6lo4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:people-group"} {...others} />);
}

export default Component;
