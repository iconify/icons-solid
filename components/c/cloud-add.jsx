import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z05zhqg7i.css';
import '../../css/d/dc9-mbcqa.css';
import '../../css/s/sqoyz0-mw.css';
import '../../css/r/rmbqtvl-e.css';
import '../../css/z/zs1s4r4du.css';
import '../../css/n/ndoqwolfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z05zhqg7i"/><path class="dc9-mbcqa"/><path class="sqoyz0-mw"/><path class="rmbqtvl-e"/><path class="zs1s4r4du"/><path class="ndoqwolfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cloud-add"} {...others} />);
}

export default Component;
