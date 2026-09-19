import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vzo3ypbps.css';
import '../../css/c/c7g2j5ruz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="vzo3ypbps"/><path class="c7g2j5ruz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:alarm"} {...others} />);
}

export default Component;
