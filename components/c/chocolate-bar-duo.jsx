import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i654d8dxp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jn9dndbtq.css';
import '../../css/u/uilojg1vs.css';
import '../../css/b/blaopgfmd.css';
import '../../css/b/bquz3uorp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i654d8dxp secondary"/><g class="dt0cm9dhy primary"><path class="jn9dndbtq"/><path class="uilojg1vs"/><path class="blaopgfmd"/><path class="bquz3uorp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chocolate-bar-duo"} {...others} />);
}

export default Component;
