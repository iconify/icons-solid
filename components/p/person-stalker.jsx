import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-1adcsiq.css';
import '../../css/a/aqpq34bqw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e-1adcsiq"/><path class="aqpq34bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:person-stalker"} {...others} />);
}

export default Component;
