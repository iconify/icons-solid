import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6drpmb4w.css';
import '../../css/j/jjgchve5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l6drpmb4w"/><path class="jjgchve5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ear"} {...others} />);
}

export default Component;
