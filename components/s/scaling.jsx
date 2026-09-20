import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pgrmf7kuf.css';
import '../../css/n/n-d-8yyyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pgrmf7kuf"/><path class="n-d-8yyyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scaling"} {...others} />);
}

export default Component;
