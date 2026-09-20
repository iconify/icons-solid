import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f_gnwzb8z.css';
import '../../css/t/t-007b-3c.css';
import '../../css/f/fx38fz2eg.css';
import '../../css/p/paayxvxde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f_gnwzb8z"/><path class="t-007b-3c"/><path class="fx38fz2eg"/><path class="paayxvxde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-broken"} {...others} />);
}

export default Component;
