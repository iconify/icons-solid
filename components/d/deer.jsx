import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxnt0mb0m.css';
import '../../css/w/wnpvwrb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jxnt0mb0m"/><path class="wnpvwrb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:deer"} {...others} />);
}

export default Component;
