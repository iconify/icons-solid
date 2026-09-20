import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l7m-g-svw.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l7m-g-svw"/><path class="rsrhfac5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-off-fill"} {...others} />);
}

export default Component;
