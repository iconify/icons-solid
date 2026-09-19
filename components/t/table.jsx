import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iyn5nib5u.css';
import '../../css/x/xrwtinblr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3UgbJdrl"><g class="wwvp95byt"><rect class="iyn5nib5u"/><path class="xrwtinblr"/></g></mask></defs><path mask="url(#SVG3UgbJdrl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:table"} {...others} />);
}

export default Component;
