import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a3haduf6f.css';
import '../../css/i/ioapoib8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a3haduf6f"/><path class="ioapoib8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-smile-beam"} {...others} />);
}

export default Component;
