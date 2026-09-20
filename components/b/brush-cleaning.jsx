import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_v2qqb6c.css';
import '../../css/z/zvc7enjdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a_v2qqb6c"/><path class="zvc7enjdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:brush-cleaning"} {...others} />);
}

export default Component;
