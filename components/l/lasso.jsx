import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vwg62yb_a.css';
import '../../css/p/p12ebw2el.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vwg62yb_a"/><circle class="p12ebw2el"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:lasso"} {...others} />);
}

export default Component;
