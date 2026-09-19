import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nwbhzkbcg.css';
import '../../css/r/rr-2dhbyn.css';
import '../../css/c/c9-gn0brd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGu7LnwcKL"><g class="aql7dnt-u"><path class="nwbhzkbcg"/><path clip-rule="evenodd" class="rr-2dhbyn"/><path class="c9-gn0brd"/></g></mask></defs><path mask="url(#SVGu7LnwcKL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:click"} {...others} />);
}

export default Component;
