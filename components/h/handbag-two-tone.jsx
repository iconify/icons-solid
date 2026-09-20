import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1qybnbqt.css';
import '../../css/o/ohmw0ccwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u1qybnbqt"/><path class="ohmw0ccwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:handbag-two-tone"} {...others} />);
}

export default Component;
