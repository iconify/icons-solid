import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-m6-9brp.css';
import '../../css/j/j3c9szwlt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o-m6-9brp"/><path class="j3c9szwlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:candy"} {...others} />);
}

export default Component;
