import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t9w8_j8sg.css';
import '../../css/b/b8r00ibax.css';
import '../../css/y/yd8f70bky.css';
import '../../css/b/bdmvmg3am.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0LE93dYc"><g class="wwvp95byt"><path class="t9w8_j8sg"/><path class="b8r00ibax"/><path class="yd8f70bky"/><path class="bdmvmg3am"/></g></mask></defs><path mask="url(#SVG0LE93dYc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cake-three"} {...others} />);
}

export default Component;
