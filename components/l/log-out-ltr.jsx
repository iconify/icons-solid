import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2mfls2pl.css';
import '../../css/v/v9ltn1t8c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v2mfls2pl"/><path class="v9ltn1t8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:log-out-ltr"} {...others} />);
}

export default Component;
