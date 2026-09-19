import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/ja1cdv5sd.css';
import '../../css/y/yy_8hdb4g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGumOR0d8h"><g class="aql7dnt-u"><path class="ja1cdv5sd"/><path class="yy_8hdb4g"/></g></mask></defs><path mask="url(#SVGumOR0d8h)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-pants-short"} {...others} />);
}

export default Component;
