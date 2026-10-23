import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yo7v3ew5f.css';
import '../../css/b/brjbdzwmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yo7v3ew5f"/><path class="brjbdzwmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:drill"} {...others} />);
}

export default Component;
