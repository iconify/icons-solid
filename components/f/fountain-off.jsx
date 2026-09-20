import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srs2-9-hd.css';
import '../../css/x/xp--8h70s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="srs2-9-hd"/><path class="xp--8h70s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:fountain-off"} {...others} />);
}

export default Component;
