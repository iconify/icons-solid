import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xp2l4acuz.css';
import '../../css/p/pists6bnz.css';
import '../../css/g/gla1ypbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xp2l4acuz"/><path class="pists6bnz"/><path class="gla1ypbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sticky-note-off-two-tone"} {...others} />);
}

export default Component;
