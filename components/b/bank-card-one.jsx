import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/t366rs_zx.css';
import '../../css/y/y69zqwb9i.css';
import '../../css/x/xma6_zbrt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoDmWQbYk"><g class="aql7dnt-u"><path class="t366rs_zx"/><rect class="y69zqwb9i"/><path class="xma6_zbrt"/></g></mask></defs><path mask="url(#SVGoDmWQbYk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bank-card-one"} {...others} />);
}

export default Component;
