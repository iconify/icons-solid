import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ydqd7bg-l.css';
import '../../css/t/td-ms0blp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ydqd7bg-l"/><path class="td-ms0blp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-handball"} {...others} />);
}

export default Component;
