import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vtmphkd3e.css';
import '../../css/v/v4xyr1b2d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWL9LYdfa"><g class="wwvp95byt"><path class="vtmphkd3e"/><path class="v4xyr1b2d"/></g></mask></defs><path mask="url(#SVGWL9LYdfa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:delete-two"} {...others} />);
}

export default Component;
