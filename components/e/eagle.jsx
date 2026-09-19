import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvdlkkmwq.css';
import '../../css/l/lg4joxb9h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPvIAkcLy"><g class="ft5dv1b6b"><path class="cvdlkkmwq"/><circle class="lg4joxb9h"/></g></mask></defs><path mask="url(#SVGPvIAkcLy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:eagle"} {...others} />);
}

export default Component;
