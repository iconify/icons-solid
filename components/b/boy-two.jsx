import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mg6s-wbot.css';
import '../../css/c/chx26abuv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqkVAYbmy"><g class="aql7dnt-u"><circle class="mg6s-wbot"/><path class="chx26abuv"/></g></mask></defs><path mask="url(#SVGqkVAYbmy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:boy-two"} {...others} />);
}

export default Component;
