import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xf58xqbld.css';
import '../../css/g/g-fly6bnt.css';
import '../../css/b/b_jcstb8p.css';
import '../../css/b/bq6_7qd5x.css';
import '../../css/y/y7djzqyor.css';
import '../../css/k/ked590wco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="xf58xqbld"/><path class="g-fly6bnt"/><circle class="b_jcstb8p"/><path class="bq6_7qd5x"/><path class="y7djzqyor"/><path class="ked590wco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-remote"} {...others} />);
}

export default Component;
