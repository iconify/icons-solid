import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eebbqibke.css';
import '../../css/i/i7z607m3y.css';
import '../../css/s/s_-e5vbjx.css';
import '../../css/v/vi4-tbc9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvE0ncbKk"><g class="ft5dv1b6b"><path class="eebbqibke"/><path class="i7z607m3y"/><path clip-rule="evenodd" class="s_-e5vbjx"/><path class="vi4-tbc9j"/></g></mask></defs><path mask="url(#SVGvE0ncbKk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:taxi"} {...others} />);
}

export default Component;
