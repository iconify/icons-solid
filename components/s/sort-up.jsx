import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/c/c0yp3kbar.css';
import '../../css/l/l74h3ibbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="c0yp3kbar"/><path class="l74h3ibbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-up"} {...others} />);
}

export default Component;
