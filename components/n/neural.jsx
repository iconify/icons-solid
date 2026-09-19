import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/d/d4uzuxbeh.css';
import '../../css/e/e6fsqxbrk.css';
import '../../css/d/d4nb9cc3g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMaCf9bZC"><g class="s9cl3zbei"><path clip-rule="evenodd" class="d4uzuxbeh"/><path class="e6fsqxbrk"/><path class="d4nb9cc3g"/></g></mask></defs><path mask="url(#SVGMaCf9bZC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:neural"} {...others} />);
}

export default Component;
