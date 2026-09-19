import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijmm-rb2y.css';
import '../../css/s/s9x15swgn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxewEkxmK"><g class="ft5dv1b6b"><path class="ijmm-rb2y"/><path clip-rule="evenodd" class="s9x15swgn"/></g></mask></defs><path mask="url(#SVGxewEkxmK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tag-one"} {...others} />);
}

export default Component;
