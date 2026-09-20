import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/acontm-2q.css';
import '../../css/y/y9jt1wb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="acontm-2q"/><path class="y9jt1wb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:trending-down"} {...others} />);
}

export default Component;
