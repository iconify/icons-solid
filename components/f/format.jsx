import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/r/rqf9totdd.css';
import '../../css/h/h6d9v6b8u.css';
import '../../css/s/sv-ds5b4v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtc8sceDf"><g class="hv130ab-t"><path class="rqf9totdd"/><path class="h6d9v6b8u"/><path class="sv-ds5b4v"/></g></mask></defs><path mask="url(#SVGtc8sceDf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:format"} {...others} />);
}

export default Component;
