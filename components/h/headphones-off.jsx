import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zmg2m37bs.css';
import '../../css/n/nhc23403f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zmg2m37bs"/><path class="nhc23403f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:headphones-off"} {...others} />);
}

export default Component;
