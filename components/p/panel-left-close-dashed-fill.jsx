import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r18z6yb6d.css';
import '../../css/z/zuv35owmt.css';
import '../../css/v/vmayczbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r18z6yb6d"/><path class="zuv35owmt"/><path class="vmayczbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-left-close-dashed-fill"} {...others} />);
}

export default Component;
