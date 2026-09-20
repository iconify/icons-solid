import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crwqktnfb.css';
import '../../css/m/mawqzfbza.css';
import '../../css/h/h5472wfqf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="crwqktnfb"/><path class="mawqzfbza"/><path class="h5472wfqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pets-allowed"} {...others} />);
}

export default Component;
