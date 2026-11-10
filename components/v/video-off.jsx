import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amnjqoxee.css';
import '../../css/f/fi-43sb1e.css';
import '../../css/y/ya1qmvbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="amnjqoxee"/><path class="fi-43sb1e"/><path class="ya1qmvbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-off"} {...others} />);
}

export default Component;
