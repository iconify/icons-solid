import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7_b83bfo.css';
import '../../css/w/w6uz2sbpd.css';
import '../../css/e/epr-bjb7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x7_b83bfo"/><circle class="w6uz2sbpd"/><path class="epr-bjb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-ionic"} {...others} />);
}

export default Component;
