import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tmv9f3ave.css';
import '../../css/a/alsexi7xx.css';
import '../../css/h/hdbq3cbgp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIQF2UvjP"><g class="aql7dnt-u"><path class="tmv9f3ave"/><path class="alsexi7xx"/><path class="hdbq3cbgp"/></g></mask></defs><path mask="url(#SVGIQF2UvjP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:umbrella-two"} {...others} />);
}

export default Component;
