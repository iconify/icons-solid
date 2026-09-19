import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pohjlbb7n.css';
import '../../css/g/g0mjuxxff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTzCynSAx"><g class="aql7dnt-u"><path class="pohjlbb7n"/><path clip-rule="evenodd" class="g0mjuxxff"/></g></mask></defs><path mask="url(#SVGTzCynSAx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:radar-two"} {...others} />);
}

export default Component;
