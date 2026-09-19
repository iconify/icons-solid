import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uh769acwe.css';
import '../../css/e/eevc8fboi.css';
import '../../css/g/gootj1b_k.css';
import '../../css/p/pxyeaeueo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8aqG1cma"><g class="ft5dv1b6b"><path class="uh769acwe"/><path class="eevc8fboi"/><rect class="gootj1b_k"/><path class="pxyeaeueo"/></g></mask></defs><path mask="url(#SVG8aqG1cma)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sound-one"} {...others} />);
}

export default Component;
