import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a4nx-rb0u.css';
import '../../css/m/mmqibuurd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a4nx-rb0u"/><path class="mmqibuurd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:folder-lock"} {...others} />);
}

export default Component;
