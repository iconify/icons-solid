import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnlrc1vky.css';
import '../../css/z/z7yzrbbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vnlrc1vky"/><path class="z7yzrbbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-x"} {...others} />);
}

export default Component;
