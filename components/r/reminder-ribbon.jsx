import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/g/g2f1i4b_f.css';
import '../../css/r/r1gnjem7y.css';
import '../../css/y/yr0pp4b7r.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="o58hkebvg"><path class="g2f1i4b_f"/><path class="r1gnjem7y"/><path class="yr0pp4b7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:reminder-ribbon"} {...others} />);
}

export default Component;
