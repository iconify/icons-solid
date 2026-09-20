import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djp69qm9q.css';
import '../../css/m/mfdvrmb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="djp69qm9q"/><path class="mfdvrmb7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-edit"} {...others} />);
}

export default Component;
