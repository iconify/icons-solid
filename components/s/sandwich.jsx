import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twwyzac5a.css';
import '../../css/u/u2u1b9bir.css';
import '../../css/g/gwnw5mblv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="twwyzac5a"/><path class="u2u1b9bir"/><path class="gwnw5mblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:sandwich"} {...others} />);
}

export default Component;
