import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2a_ighia.css';
import '../../css/c/cgrhg589l.css';
import '../../css/j/jbukd8bpm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoJQtmclp"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="k2a_ighia"/><path class="cgrhg589l"/><path class="jbukd8bpm"/></g></mask></defs><path mask="url(#SVGoJQtmclp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:anti-corrosion"} {...others} />);
}

export default Component;
