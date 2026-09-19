import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vaz1v--_q.css';
import '../../css/g/g1z6bz-ab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="vaz1v--_q"/><path class="g1z6bz-ab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:award"} {...others} />);
}

export default Component;
