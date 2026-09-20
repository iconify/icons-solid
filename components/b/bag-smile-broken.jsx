import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ouvmfj4ut.css';
import '../../css/b/bomz11bhc.css';
import '../../css/b/buo1kubox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ouvmfj4ut"/><path class="bomz11bhc"/><path class="buo1kubox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-smile-broken"} {...others} />);
}

export default Component;
