import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fn3l47d1f.css';
import '../../css/k/k7oyk-b2n.css';
import '../../css/j/jq54vwoda.css';
import '../../css/d/d5_gd2mux.css';
import '../../css/n/nnfke78sg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fn3l47d1f"/><path class="k7oyk-b2n wm-shine"/><path class="jq54vwoda wm-k"/><path class="d5_gd2mux wm-a"/><path class="nnfke78sg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:martini"} {...others} />);
}

export default Component;
