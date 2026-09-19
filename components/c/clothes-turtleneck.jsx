import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bxqc1kmci.css';
import '../../css/b/b-me-lb3d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOeamjdsF"><g class="aql7dnt-u"><path class="bxqc1kmci"/><path class="b-me-lb3d"/></g></mask></defs><path mask="url(#SVGOeamjdsF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-turtleneck"} {...others} />);
}

export default Component;
