import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x13bbn0on.css';
import '../../css/d/d46obtbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x13bbn0on"/><path class="d46obtbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-adobe-xd"} {...others} />);
}

export default Component;
