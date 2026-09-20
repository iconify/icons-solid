import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/romdfub4k.css';
import '../../css/c/c39760azn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="romdfub4k"/><path class="c39760azn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tubes-fill"} {...others} />);
}

export default Component;
