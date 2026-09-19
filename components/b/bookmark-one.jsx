import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/itbdp0qfs.css';
import '../../css/e/egvpwab1r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7HDnWnPG"><g class="v3_i3wktz"><path class="itbdp0qfs"/><path class="egvpwab1r"/></g></mask></defs><path mask="url(#SVG7HDnWnPG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bookmark-one"} {...others} />);
}

export default Component;
