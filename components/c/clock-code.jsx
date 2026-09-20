import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/er4ldyc7w.css';
import '../../css/t/tzcs0jirj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="er4ldyc7w"/><path class="tzcs0jirj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-code"} {...others} />);
}

export default Component;
