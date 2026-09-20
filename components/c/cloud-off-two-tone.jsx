import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzsiy7bby.css';
import '../../css/b/b1u2suopy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mzsiy7bby"/><path class="b1u2suopy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-off-two-tone"} {...others} />);
}

export default Component;
