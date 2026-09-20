import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0am46jmx.css';
import '../../css/b/bdi5cobhw.css';
import '../../css/q/qjwupbcdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="d0am46jmx"/><path clip-rule="evenodd" class="bdi5cobhw"/><path class="qjwupbcdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-add-alt-duotone"} {...others} />);
}

export default Component;
