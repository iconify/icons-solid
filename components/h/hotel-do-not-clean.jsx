import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytljj_1kl.css';
import '../../css/c/c812ekzbz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzz9WpceD"><g class="ft5dv1b6b"><path class="ytljj_1kl"/><path class="c812ekzbz"/></g></mask></defs><path mask="url(#SVGzz9WpceD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hotel-do-not-clean"} {...others} />);
}

export default Component;
