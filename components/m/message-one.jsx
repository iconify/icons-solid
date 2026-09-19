import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/q/qrzpqooux.css';
import '../../css/t/tele8ebjz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnEyzbdTC"><g class="hv130ab-t"><path class="qrzpqooux"/><path class="tele8ebjz"/></g></mask></defs><path mask="url(#SVGnEyzbdTC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:message-one"} {...others} />);
}

export default Component;
