import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ur5we9b1t.css';
import '../../css/z/zfax-qbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ur5we9b1t"/><path class="zfax-qbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:book-check-fill"} {...others} />);
}

export default Component;
