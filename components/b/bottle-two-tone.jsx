import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ge0wh-0qw.css';
import '../../css/u/ut5ih9blb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ge0wh-0qw"/><path class="ut5ih9blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bottle-two-tone"} {...others} />);
}

export default Component;
