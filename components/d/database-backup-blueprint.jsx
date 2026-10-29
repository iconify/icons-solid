import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/voayg6-9d.css';
import '../../css/p/p7hy21fel.css';
import '../../css/d/d427oqbex.css';
import '../../css/c/c2iradyfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="voayg6-9d wm-deco"/><path class="p7hy21fel wm-deco"/><path class="d427oqbex"/><path class="c2iradyfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-backup-blueprint"} {...others} />);
}

export default Component;
