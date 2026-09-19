import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/z/zpwt154-d.css';
import '../../css/b/bj3t0cbmv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiyqbjJrS"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="zpwt154-d"/><path class="bj3t0cbmv"/></g></mask></defs><path mask="url(#SVGiyqbjJrS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-focus"} {...others} />);
}

export default Component;
