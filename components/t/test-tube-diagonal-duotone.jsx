import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lm5qi0b5y.css';
import '../../css/s/s-xpk0xxq.css';
import '../../css/t/t4orpzvpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lm5qi0b5y"/><path class="s-xpk0xxq"/><path class="t4orpzvpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tube-diagonal-duotone"} {...others} />);
}

export default Component;
