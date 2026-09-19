import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/parj51b-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9H2JBOPY"><path class="parj51b-v"/></mask></defs><path mask="url(#SVG9H2JBOPY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fire"} {...others} />);
}

export default Component;
