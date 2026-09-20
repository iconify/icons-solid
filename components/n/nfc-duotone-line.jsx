import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igjudsbww.css';
import '../../css/e/em94yrbnu.css';
import '../../css/n/nsu1ssxqx.css';
import '../../css/r/rw-_9ez5e.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG7TNO8b2l"><g class="igjudsbww"><path class="em94yrbnu"/><path class="nsu1ssxqx"/><path class="rw-_9ez5e"/></g></mask></defs><path mask="url(#SVG7TNO8b2l)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:nfc-duotone-line"} {...others} />);
}

export default Component;
