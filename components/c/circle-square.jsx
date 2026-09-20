import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aio_58brh.css';
import '../../css/y/yg43dxi-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aio_58brh"/><path class="yg43dxi-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-square"} {...others} />);
}

export default Component;
