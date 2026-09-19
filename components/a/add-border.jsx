import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/b34sd4b3s.css';
import '../../css/g/g5j8rsb8j.css';
import '../../css/a/asikm_b9g.css';
import '../../css/x/x76xzybyl.css';
import '../../css/d/dp1tdzb5x.css';
import '../../css/c/cnvpg_b2e.css';
import '../../css/d/d_fvqpb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="b34sd4b3s"/><path class="g5j8rsb8j"/><path class="asikm_b9g"/><path class="x76xzybyl"/><path class="dp1tdzb5x"/><path class="cnvpg_b2e"/><path class="d_fvqpb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:add-border"} {...others} />);
}

export default Component;
