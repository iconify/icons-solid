import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h__8rnb5v.css';
import '../../css/x/xjh3njbok.css';
import '../../css/o/og_9js9al.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h__8rnb5v"/><circle class="xjh3njbok"/><circle class="og_9js9al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:route"} {...others} />);
}

export default Component;
