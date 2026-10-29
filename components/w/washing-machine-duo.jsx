import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g74ufgb1e.css';
import '../../css/d/dbwmo8bvj.css';
import '../../css/r/rwx8arbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g74ufgb1e"/><path class="dbwmo8bvj wm-a"/><path class="rwx8arbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:washing-machine-duo"} {...others} />);
}

export default Component;
