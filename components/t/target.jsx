import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/unl9q-qra.css';
import '../../css/c/c9ye0yfbq.css';
import '../../css/g/gllekcpqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="unl9q-qra"/><path class="c9ye0yfbq"/><path class="gllekcpqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:target"} {...others} />);
}

export default Component;
