import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vvnqw8brl.css';
import '../../css/z/zqeh-wb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vvnqw8brl"/><path class="zqeh-wb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:map-pin"} {...others} />);
}

export default Component;
