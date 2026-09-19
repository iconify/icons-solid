import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1aubbazh.css';
import '../../css/s/sjjhyfbaz.css';
import '../../css/b/b-_wdgl5d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhcxICbYU"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="z1aubbazh"/><path class="sjjhyfbaz"/><path class="b-_wdgl5d"/></g></mask></defs><path mask="url(#SVGhcxICbYU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shopping-mall"} {...others} />);
}

export default Component;
