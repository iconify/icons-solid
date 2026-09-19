import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/p/pvs4vzbqe.css';
import '../../css/j/jgxrsjbxi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRquGTc0J"><g class="adexpl72i"><path class="pvs4vzbqe"/><rect class="jgxrsjbxi"/></g></mask></defs><path mask="url(#SVGRquGTc0J)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:palm"} {...others} />);
}

export default Component;
