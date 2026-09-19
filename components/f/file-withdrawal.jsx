import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/h/hg2v1dbtb.css';
import '../../css/b/b0qk9-1ay.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRmu0Od8X"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="hg2v1dbtb"/><path class="b0qk9-1ay"/></g></mask></defs><path mask="url(#SVGRmu0Od8X)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-withdrawal"} {...others} />);
}

export default Component;
