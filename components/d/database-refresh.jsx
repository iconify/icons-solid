import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ruqvfq00p.css';
import '../../css/e/e5scmybyi.css';
import '../../css/r/r_d88g2up.css';
import '../../css/d/dt5yh4mdw.css';
import '../../css/r/rw203rb9x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ruqvfq00p"/><path class="e5scmybyi"/><path class="r_d88g2up"/><path class="dt5yh4mdw"/><path class="rw203rb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-refresh"} {...others} />);
}

export default Component;
