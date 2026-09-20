import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x2663k7rl.css';
import '../../css/e/elvvetb9v.css';
import '../../css/x/x73ae8bnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x2663k7rl"/><rect class="elvvetb9v"/><path class="x73ae8bnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:image-sparkle"} {...others} />);
}

export default Component;
