import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_6h9nbwv.css';
import '../../css/c/cd9fujbkr.css';
import '../../css/u/u581sr0wm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqPZNEceL"><g class="ft5dv1b6b"><path class="a_6h9nbwv"/><path class="cd9fujbkr"/><path class="u581sr0wm"/></g></mask></defs><path mask="url(#SVGqPZNEceL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:strongbox"} {...others} />);
}

export default Component;
