import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g3-owbu_s.css';
import '../../css/h/hyf600jeo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2fyF0bGG"><g class="aql7dnt-u"><path class="g3-owbu_s"/><path class="hyf600jeo"/></g></mask></defs><path mask="url(#SVG2fyF0bGG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rectangle-tear"} {...others} />);
}

export default Component;
