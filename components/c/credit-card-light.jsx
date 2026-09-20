import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqj5b0nts.css';
import '../../css/c/crpkpxbgp.css';
import '../../css/w/wh8wwcoah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zqj5b0nts"/><path class="crpkpxbgp"/><circle class="wh8wwcoah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:credit-card-light"} {...others} />);
}

export default Component;
