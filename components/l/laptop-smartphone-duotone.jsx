import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b592vvi5s.css';
import '../../css/j/jy1naacqm.css';
import '../../css/i/ijh4fpfgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b592vvi5s"/><path class="jy1naacqm"/><path clip-rule="evenodd" class="ijh4fpfgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:laptop-smartphone-duotone"} {...others} />);
}

export default Component;
