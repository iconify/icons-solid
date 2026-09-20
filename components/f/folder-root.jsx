import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t93qolb9i.css';
import '../../css/m/mcnvjnbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t93qolb9i"/><path class="mcnvjnbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:folder-root"} {...others} />);
}

export default Component;
