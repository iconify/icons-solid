import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/ba_vn-w1a.css';
import '../../css/h/hp4v6yboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="ba_vn-w1a"/><path class="hp4v6yboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:circle-left"} {...others} />);
}

export default Component;
