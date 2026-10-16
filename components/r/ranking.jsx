import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irbf1mb7i.css';
import '../../css/a/a6l95ubko.css';
import '../../css/v/voahmv0wr.css';
import '../../css/r/rk9_t_g4q.css';
import '../../css/j/jbg282--l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="irbf1mb7i"/><path class="a6l95ubko"/><path class="voahmv0wr"/><path class="rk9_t_g4q"/><path class="jbg282--l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ranking"} {...others} />);
}

export default Component;
