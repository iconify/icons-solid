import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pk93sbcbd.css';
import '../../css/b/bts1g6b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pk93sbcbd"/><path class="bts1g6b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-closed-duotone"} {...others} />);
}

export default Component;
