import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/y3yom5bcd.css';
import '../../css/k/knxvrwb6y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEoMuNbDJ"><g class="aql7dnt-u"><path class="y3yom5bcd"/><path class="knxvrwb6y"/></g></mask></defs><path mask="url(#SVGEoMuNbDJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:leaves-two"} {...others} />);
}

export default Component;
