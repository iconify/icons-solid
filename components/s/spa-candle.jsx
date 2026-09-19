import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xqf-9jbow.css';
import '../../css/j/jh580j15b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRWi0IbuG"><g class="aql7dnt-u"><path class="xqf-9jbow"/><path class="jh580j15b"/></g></mask></defs><path mask="url(#SVGRWi0IbuG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:spa-candle"} {...others} />);
}

export default Component;
