import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/if63kzvhg.css';
import '../../css/e/e8taeev-a.css';
import '../../css/l/l9xwhmbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="if63kzvhg"/><path class="e8taeev-a"/><path class="l9xwhmbjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:controls-previous"} {...others} />);
}

export default Component;
