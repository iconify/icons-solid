import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u_o0wac9f.css';
import '../../css/x/xk4qsobhv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXH65VdQg"><g class="aql7dnt-u"><path class="u_o0wac9f"/><path class="xk4qsobhv"/></g></mask></defs><path mask="url(#SVGXH65VdQg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cook"} {...others} />);
}

export default Component;
