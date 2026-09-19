import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr1i_9hyb.css';
import '../../css/w/wk863kbaw.css';
import '../../css/g/gavy2zwed.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlwsAoeXo"><g class="ft5dv1b6b"><path class="pr1i_9hyb"/><path class="wk863kbaw"/><circle class="gavy2zwed"/></g></mask></defs><path mask="url(#SVGlwsAoeXo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:kitchen-knife"} {...others} />);
}

export default Component;
