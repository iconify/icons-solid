import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q62uhjbpq.css';
import '../../css/g/gsh3p8bkl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="q62uhjbpq"/><path class="gsh3p8bkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:satellite-dish"} {...others} />);
}

export default Component;
