import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2a004bjj.css';
import '../../css/p/ppllcgt7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a2a004bjj"/><path class="ppllcgt7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:book-duotone"} {...others} />);
}

export default Component;
