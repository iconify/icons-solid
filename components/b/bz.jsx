import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g8hrmob6g.css';
import '../../css/a/axbwgjtpa.css';
import '../../css/k/kosew5bhw.css';
import '../../css/l/lakt7bcay.css';
import '../../css/d/do5kqkb-t.css';
import '../../css/h/hfso2z7ml.css';
import '../../css/y/y_1yu2bmg.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g8hrmob6g"/><circle class="axbwgjtpa"/><circle class="kosew5bhw"/><circle class="lakt7bcay"/><path class="do5kqkb-t"/><path class="hfso2z7ml"/><path class="y_1yu2bmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:bz"} {...others} />);
}

export default Component;
