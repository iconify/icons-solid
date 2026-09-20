import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qvba41bsr.css';
import '../../css/c/c2xtjhb4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qvba41bsr"/><path class="c2xtjhb4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-plus-fill"} {...others} />);
}

export default Component;
