import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/j-3ehnblu.css';
import '../../css/j/jd75xrteg.css';
import '../../css/p/pmugc1kfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="j-3ehnblu"/><path class="jd75xrteg"/><path class="pmugc1kfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bank-notes-1"} {...others} />);
}

export default Component;
