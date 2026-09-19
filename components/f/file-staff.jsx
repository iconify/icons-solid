import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/z/zpwt154-d.css';
import '../../css/y/yp7rfpwnl.css';
import '../../css/d/disxecbqq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPaR9ub9L"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="zpwt154-d"/><circle class="yp7rfpwnl"/><path class="disxecbqq"/></g></mask></defs><path mask="url(#SVGPaR9ub9L)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-staff"} {...others} />);
}

export default Component;
