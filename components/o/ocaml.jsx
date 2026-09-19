import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/r/r4lzt7bws.css';
import '../../css/a/apwd9x61f.css';
import '../../css/c/c2x12s28z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="r4lzt7bws"/><path class="apwd9x61f"/><path class="c2x12s28z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ocaml"} {...others} />);
}

export default Component;
