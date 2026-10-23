import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yr0_m1huc.css';
import '../../css/i/ichyab9mm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yr0_m1huc"/><path class="ichyab9mm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-git-2"} {...others} />);
}

export default Component;
