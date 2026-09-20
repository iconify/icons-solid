import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ubdu61bdd.css';
import '../../css/a/ax5b1hbhh.css';
import '../../css/w/w7z87iecy.css';
import '../../css/e/emncuybxc.css';
import '../../css/n/nrwrkpmrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ubdu61bdd"/><path class="ax5b1hbhh"/><path class="w7z87iecy"/><path class="emncuybxc"/><path class="nrwrkpmrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:database-share-2"} {...others} />);
}

export default Component;
