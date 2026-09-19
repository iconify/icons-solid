import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bmx2kpbdt.css';
import '../../css/o/o3op-rbzi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGm5JjudRj"><g class="aql7dnt-u"><path class="bmx2kpbdt"/><path class="o3op-rbzi"/></g></mask></defs><path mask="url(#SVGm5JjudRj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bow"} {...others} />);
}

export default Component;
