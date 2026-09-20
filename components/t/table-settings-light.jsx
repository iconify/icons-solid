import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1jsd5b9l.css';
import '../../css/l/l2x8y2o4j.css';
import '../../css/q/qwyxqjp2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z1jsd5b9l"/><path class="l2x8y2o4j"/><circle class="qwyxqjp2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:table-settings-light"} {...others} />);
}

export default Component;
