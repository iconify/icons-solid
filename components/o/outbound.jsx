import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mjczpwbmh.css';
import '../../css/i/izvf6gbvk.css';
import '../../css/h/h79q5vbot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtpovBe8u"><g class="rohhhzb0l"><path class="mjczpwbmh"/><circle class="izvf6gbvk"/><path class="h79q5vbot"/></g></mask></defs><path mask="url(#SVGtpovBe8u)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:outbound"} {...others} />);
}

export default Component;
