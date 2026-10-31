import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nl_elacjj.css';
import '../../css/y/y2pitt7iq.css';
import '../../css/e/eacle5s9s.css';
import '../../css/u/u0km1qbun.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nl_elacjj"/><path class="y2pitt7iq"/><path class="eacle5s9s wm-k"/><path class="u0km1qbun wm-a"/><path class="a0o9nky4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:north-star"} {...others} />);
}

export default Component;
