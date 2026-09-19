import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nuht-ehxb.css';
import '../../css/c/c-tl-ufqx.css';
import '../../css/s/scxclyx4w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9A5j8kqH"><g class="ft5dv1b6b"><path class="nuht-ehxb"/><path class="c-tl-ufqx"/><path class="scxclyx4w"/></g></mask></defs><path mask="url(#SVG9A5j8kqH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:elevator"} {...others} />);
}

export default Component;
