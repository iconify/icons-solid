import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lrtv4u-dn.css';
import '../../css/i/i4da12bea.css';
import '../../css/h/h38z5cbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lrtv4u-dn"/><path class="i4da12bea"/><path class="h38z5cbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-mastercard"} {...others} />);
}

export default Component;
