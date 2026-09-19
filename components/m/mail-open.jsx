import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hihlctbwv.css';
import '../../css/h/hvzd0ubol.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGz8UWde7M"><g class="v3_i3wktz"><path class="hihlctbwv"/><path class="hvzd0ubol"/></g></mask></defs><path mask="url(#SVGz8UWde7M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mail-open"} {...others} />);
}

export default Component;
