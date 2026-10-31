import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zks-2n3ip.css';
import '../../css/b/brrc_u8ok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zks-2n3ip"/><circle class="brrc_u8ok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:show"} {...others} />);
}

export default Component;
