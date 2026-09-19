import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hehu1bb7z.css';
import '../../css/i/i-ufrdbxe.css';
import '../../css/l/locms3aej.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoFxlZdWE"><g class="wwvp95byt"><path class="hehu1bb7z"/><path class="i-ufrdbxe"/><path class="locms3aej"/></g></mask></defs><path mask="url(#SVGoFxlZdWE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:power-supply"} {...others} />);
}

export default Component;
