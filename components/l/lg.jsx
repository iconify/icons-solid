import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j53e3bbdj.css';
import '../../css/s/sn04zxr3r.css';
import '../../css/a/a29sbjtmv.css';
import '../../css/k/kfanutbnn.css';
import '../../css/l/lxrw2hbnk.css';
import '../../css/r/rxbd57b8g.css';
import '../../css/u/u3tl5lbcp.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsLg0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsLg0)"><path class="j53e3bbdj"/><path class="sn04zxr3r"/><path class="a29sbjtmv"/><path class="kfanutbnn"/><path class="lxrw2hbnk"/><circle class="rxbd57b8g"/><path class="u3tl5lbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lg"} {...others} />);
}

export default Component;
