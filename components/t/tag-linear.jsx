import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2sl48bmy.css';
import '../../css/o/ozst3gb1r.css';
import '../../css/f/f9c6rlbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a2sl48bmy"/><circle transform="rotate(-45 8.607 8.879)" class="ozst3gb1r"/><path class="f9c6rlbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-linear"} {...others} />);
}

export default Component;
