import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7ozr2vll.css';
import '../../css/x/xu0fbwney.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u7ozr2vll"/><path class="xu0fbwney"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:life-buoy"} {...others} />);
}

export default Component;
