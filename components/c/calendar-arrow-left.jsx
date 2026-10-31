import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x__2j9b-q.css';
import '../../css/z/z99fyg__u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x__2j9b-q"/><path class="z99fyg__u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:calendar-arrow-left"} {...others} />);
}

export default Component;
