import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gac1gm6_a.css';
import '../../css/l/lf-esqlup.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gac1gm6_a"/><path class="lf-esqlup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:funnel-match-ltr"} {...others} />);
}

export default Component;
