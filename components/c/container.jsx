import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8m7q2l2l.css';
import '../../css/g/gzdfuhbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v8m7q2l2l"/><path class="gzdfuhbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:container"} {...others} />);
}

export default Component;
