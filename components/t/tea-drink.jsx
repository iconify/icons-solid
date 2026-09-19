import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o2sblwhlm.css';
import '../../css/t/tg712obfr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyLGssdZJ"><g class="aql7dnt-u"><path clip-rule="evenodd" class="o2sblwhlm"/><path class="tg712obfr"/></g></mask></defs><path mask="url(#SVGyLGssdZJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tea-drink"} {...others} />);
}

export default Component;
