import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsemn25zi.css';
import '../../css/g/gtqbe8bko.css';
import '../../css/o/oza9rwbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nsemn25zi"/><path class="gtqbe8bko"/><path class="oza9rwbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stack-middle"} {...others} />);
}

export default Component;
