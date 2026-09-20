import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cte-q8baf.css';
import '../../css/r/ronbcpe1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cte-q8baf"/><path class="ronbcpe1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-opened"} {...others} />);
}

export default Component;
