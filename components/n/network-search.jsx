import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qic4tac9x.css';
import '../../css/c/c63qdvb2j.css';
import '../../css/d/dfgzwuk1o.css';
import '../../css/v/vtlhto3zm.css';
import '../../css/w/wissfzchy.css';
import '../../css/i/ioosytb3c.css';
import '../../css/y/y7wgk8bfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qic4tac9x"/><path class="c63qdvb2j"/><path class="dfgzwuk1o"/><path class="vtlhto3zm"/><path class="wissfzchy"/><path class="ioosytb3c"/><path class="y7wgk8bfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:network-search"} {...others} />);
}

export default Component;
