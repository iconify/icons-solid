import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8d49kbah.css';
import '../../css/b/b83109hix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d8d49kbah"/><path class="b83109hix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:fingerprint"} {...others} />);
}

export default Component;
