import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vwn3kz59i.css';
import '../../css/t/ta8z2lxla.css';
import '../../css/c/cahye61gh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vwn3kz59i"/><path class="ta8z2lxla"/><path class="cahye61gh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:headphones-customer-support-question"} {...others} />);
}

export default Component;
