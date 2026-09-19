import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj5qymupp.css';
import '../../css/a/a4v0hrbww.css';
import '../../css/z/zwd2s8b6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG111BXhBY"><g class="ft5dv1b6b"><path class="mj5qymupp"/><path class="a4v0hrbww"/><path class="zwd2s8b6h"/></g></mask></defs><path mask="url(#SVG111BXhBY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-windbreaker"} {...others} />);
}

export default Component;
