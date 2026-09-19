import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z2vq2lbgo.css';
import '../../css/u/une811siw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z2vq2lbgo"/><path class="une811siw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-19-virus-pandemic-3"} {...others} />);
}

export default Component;
