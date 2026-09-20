import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1jw6jb_n.css';
import '../../css/n/np6w-zb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f1jw6jb_n"/><path class="np6w-zb-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:leaf-2"} {...others} />);
}

export default Component;
