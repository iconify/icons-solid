import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pt9xvrdoi.css';
import '../../css/b/bpjol4blw.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG8qh1pdxA"><g class="k2u665ban"><circle class="pt9xvrdoi"/><path class="bpjol4blw"/></g></mask></defs><path mask="url(#SVG8qh1pdxA)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifer-bug-line-duotone"} {...others} />);
}

export default Component;
