import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7fymmw8k.css';
import '../../css/w/w_iz71b2f.css';
import '../../css/z/z8ku9rk9l.css';
import '../../css/p/pmbu_7b9k.css';
import '../../css/h/hgypjo1lx.css';
import '../../css/g/ge5f5-qjo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b7fymmw8k"/><path class="w_iz71b2f"/><circle class="z8ku9rk9l"/><circle class="pmbu_7b9k"/><circle class="hgypjo1lx"/><circle class="ge5f5-qjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:orange"} {...others} />);
}

export default Component;
