import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/typhurbru.css';
import '../../css/q/qtqtn3k0h.css';
import '../../css/l/ldgx7xjts.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="typhurbru"/><path class="qtqtn3k0h"/><path class="ldgx7xjts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:download-cloud-pop"} {...others} />);
}

export default Component;
