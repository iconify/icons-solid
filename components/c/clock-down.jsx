import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rr5akkp2z.css';
import '../../css/l/l09j8mwmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rr5akkp2z"/><path class="l09j8mwmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-down"} {...others} />);
}

export default Component;
