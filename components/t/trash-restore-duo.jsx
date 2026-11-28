import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eamdntb0j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/na4rgbmvw.css';
import '../../css/v/vpkn_nb1r.css';
import '../../css/f/f9guiachc.css';
import '../../css/u/ustj7ibxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eamdntb0j secondary"/><g class="dt0cm9dhy primary"><path class="na4rgbmvw"/><path class="vpkn_nb1r"/><path class="f9guiachc"/><path class="ustj7ibxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:trash-restore-duo"} {...others} />);
}

export default Component;
