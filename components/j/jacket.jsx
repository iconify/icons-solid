import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0r9tgh1f.css';
import '../../css/h/hpgfchboe.css';
import '../../css/s/s564u2odx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k0r9tgh1f"/><path class="hpgfchboe"/><path class="s564u2odx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:jacket"} {...others} />);
}

export default Component;
