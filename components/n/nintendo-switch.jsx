import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nzn78mvcl.css';
import '../../css/x/xknmx1buo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4zW7fuzD"><g class="aql7dnt-u"><path class="nzn78mvcl"/><path class="xknmx1buo"/></g></mask></defs><path mask="url(#SVG4zW7fuzD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nintendo-switch"} {...others} />);
}

export default Component;
