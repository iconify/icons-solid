import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xib2qv12u.css';
import '../../css/a/a-5cee3qb.css';
import '../../css/h/hbfbrwbos.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuwwLRdPF"><g class="aql7dnt-u"><path class="xib2qv12u"/><path class="a-5cee3qb"/><path class="hbfbrwbos"/></g></mask></defs><path mask="url(#SVGuwwLRdPF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:surveillance-cameras"} {...others} />);
}

export default Component;
