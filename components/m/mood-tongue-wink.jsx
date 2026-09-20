import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a3haduf6f.css';
import '../../css/k/k240stbvg.css';
import '../../css/i/ice5n0bjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a3haduf6f"/><path class="k240stbvg"/><path class="ice5n0bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-tongue-wink"} {...others} />);
}

export default Component;
