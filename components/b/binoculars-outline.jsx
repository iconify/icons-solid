import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdvk-d6wd.css';
import '../../css/a/a6npavb3q.css';
import '../../css/h/hp-glnvum.css';
import '../../css/l/l-cgyhben.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="gdvk-d6wd"><circle class="a6npavb3q"/><circle class="hp-glnvum"/><path class="l-cgyhben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:binoculars-outline"} {...others} />);
}

export default Component;
