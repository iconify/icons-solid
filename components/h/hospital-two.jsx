import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sco-lqgta.css';
import '../../css/n/ny92e0b3s.css';
import '../../css/d/d3lktyezi.css';
import '../../css/s/s8xi34pba.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQMriXbAv"><g class="aql7dnt-u"><path class="sco-lqgta"/><path class="ny92e0b3s"/><path class="d3lktyezi"/><path class="s8xi34pba"/></g></mask></defs><path mask="url(#SVGQMriXbAv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hospital-two"} {...others} />);
}

export default Component;
