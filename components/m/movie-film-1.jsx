import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/p/pdjk5bbhf.css';
import '../../css/n/nx--r9aiw.css';
import '../../css/d/ddgglvb7y.css';
import '../../css/u/u32la56ww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="pdjk5bbhf"/><path class="nx--r9aiw"/><path class="ddgglvb7y"/><path class="u32la56ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:movie-film-1"} {...others} />);
}

export default Component;
