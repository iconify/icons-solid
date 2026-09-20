import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqiwj7bws.css';
import '../../css/a/ah4dkhbeo.css';
import '../../css/a/aex-kum2g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sqiwj7bws"/><path class="ah4dkhbeo"/><path clip-rule="evenodd" class="aex-kum2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:briefcase-dollar-flat"} {...others} />);
}

export default Component;
