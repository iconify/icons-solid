import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vicn42bys.css';
import '../../css/h/huua5bc4g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGouPW9b4o"><g class="aql7dnt-u"><path clip-rule="evenodd" class="vicn42bys"/><path class="huua5bc4g"/></g></mask></defs><path mask="url(#SVGouPW9b4o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:branch-two"} {...others} />);
}

export default Component;
