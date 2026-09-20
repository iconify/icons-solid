import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a6mwcibor.css';
import '../../css/u/uw8igebtn.css';
import '../../css/x/xg5g8jbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a6mwcibor"/><path class="uw8igebtn"/><path class="xg5g8jbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-discord"} {...others} />);
}

export default Component;
