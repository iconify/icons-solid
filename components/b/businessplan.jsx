import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wu4if607f.css';
import '../../css/z/zymwndbum.css';
import '../../css/p/p-6ogacze.css';
import '../../css/c/c3pm8cc2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wu4if607f"/><path class="zymwndbum"/><path class="p-6ogacze"/><path class="c3pm8cc2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:businessplan"} {...others} />);
}

export default Component;
