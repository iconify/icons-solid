import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lfdh9bp-v.css';
import '../../css/d/d8oot1wdh.css';
import '../../css/j/jgxevjs2d.css';
import '../../css/b/bdshlwlss.css';
import '../../css/x/x6azrdbre.css';
import '../../css/u/ufyupsbau.css';
import '../../css/e/elfk3ibsx.css';
import '../../css/d/d2-egkbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lfdh9bp-v wm-shadow"/><path class="d8oot1wdh wm-s"/><path class="jgxevjs2d wm-shadow"/><path class="bdshlwlss"/><path class="x6azrdbre"/><path class="ufyupsbau wm-s"/><path class="elfk3ibsx wm-s"/><path class="d2-egkbjq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:user-search"} {...others} />);
}

export default Component;
