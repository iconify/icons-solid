import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s7dz5x3on.css';
import '../../css/c/c0f9vmb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s7dz5x3on"/><path class="c0f9vmb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bug-fill"} {...others} />);
}

export default Component;
