import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3mn7piaq.css';
import '../../css/k/kz8euhb7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuw5dzeYm"><g class="ft5dv1b6b"><path class="k3mn7piaq"/><path clip-rule="evenodd" class="kz8euhb7z"/></g></mask></defs><path mask="url(#SVGuw5dzeYm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tag-one"} {...others} />);
}

export default Component;
