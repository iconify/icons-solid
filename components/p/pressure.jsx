import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/b5cxlbb9z.css';
import '../../css/s/s1i6yv5uk.css';
import '../../css/k/k-e2t9i7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="b5cxlbb9z"/><path class="s1i6yv5uk"/><path class="k-e2t9i7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pressure"} {...others} />);
}

export default Component;
