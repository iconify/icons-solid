import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/f5fbzg0tg.css';
import '../../css/k/k4kf9d06i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9DWsV99s"><g class="rohhhzb0l"><rect class="f5fbzg0tg"/><path class="k4kf9d06i"/></g></mask></defs><path mask="url(#SVG9DWsV99s)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:iphone"} {...others} />);
}

export default Component;
