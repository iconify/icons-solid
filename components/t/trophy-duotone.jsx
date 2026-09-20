import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nzxhvcg1u.css';
import '../../css/a/am_64dmky.css';
import '../../css/l/l2g80cb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nzxhvcg1u"/><path class="am_64dmky"/><path class="l2g80cb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:trophy-duotone"} {...others} />);
}

export default Component;
