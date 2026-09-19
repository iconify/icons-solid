import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/n/n5yjc01jy.css';
import '../../css/b/brmmwgb3i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9N9LFbAv"><g class="hv130ab-t"><path class="n5yjc01jy"/><path class="brmmwgb3i"/></g></mask></defs><path mask="url(#SVG9N9LFbAv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bread"} {...others} />);
}

export default Component;
