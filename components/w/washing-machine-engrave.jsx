import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pw23ckb-m.css';
import '../../css/d/dzdu3tbka.css';
import '../../css/r/rwx8arbdh.css';
import '../../css/d/dbwmo8bvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pw23ckb-m wm-k"/><path class="dzdu3tbka wm-shadow"/><path class="rwx8arbdh wm-k"/><path class="dbwmo8bvj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:washing-machine-engrave"} {...others} />);
}

export default Component;
