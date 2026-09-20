import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acejusade.css';
import '../../css/y/y4qe-ubzy.css';
import '../../css/v/v7q1lwidl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="acejusade"/><path class="y4qe-ubzy"/><path class="v7q1lwidl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-broken"} {...others} />);
}

export default Component;
