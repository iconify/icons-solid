import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lh6ow3bkp.css';
import '../../css/j/jkqxc6rbv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC9T2wcAH"><g class="aql7dnt-u"><path class="lh6ow3bkp"/><path class="jkqxc6rbv"/></g></mask></defs><path mask="url(#SVGC9T2wcAH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chart-pie-one"} {...others} />);
}

export default Component;
