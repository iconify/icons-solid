import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jq_ousbmh.css';
import '../../css/h/htwf0xguy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXyj9GbJf"><g class="aql7dnt-u"><path class="jq_ousbmh"/><path class="htwf0xguy"/></g></mask></defs><path mask="url(#SVGXyj9GbJf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:trousers-bell-bottoms"} {...others} />);
}

export default Component;
