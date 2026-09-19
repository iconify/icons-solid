import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hjzfcubdn.css';
import '../../css/e/ezv4k-6oy.css';
import '../../css/v/v8cds7a2u.css';
import '../../css/i/i7-4nz25i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJNO7qb8d"><g class="wwvp95byt"><path class="hjzfcubdn"/><path class="ezv4k-6oy"/><path class="v8cds7a2u"/><path class="i7-4nz25i"/></g></mask></defs><path mask="url(#SVGJNO7qb8d)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:full-dress-longuette"} {...others} />);
}

export default Component;
