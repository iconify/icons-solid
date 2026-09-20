import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9irk-b7g.css';
import '../../css/w/wc_sb7zdp.css';
import '../../css/j/jj44zgj2e.css';
import '../../css/x/x7i0fddxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b9irk-b7g"/><path class="wc_sb7zdp"/><path class="jj44zgj2e"/><path class="x7i0fddxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:amusement-park-balloon"} {...others} />);
}

export default Component;
