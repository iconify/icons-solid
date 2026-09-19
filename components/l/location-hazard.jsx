import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkmuvyw1o.css';
import '../../css/a/a_ls9acgf.css';
import '../../css/n/nu2_-nbje.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="xkmuvyw1o"/><path class="a_ls9acgf"/><path class="nu2_-nbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-hazard"} {...others} />);
}

export default Component;
