import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c75ltrbyr.css';
import '../../css/u/ucs8zkook.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c75ltrbyr"/><path class="ucs8zkook"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:youtube"} {...others} />);
}

export default Component;
