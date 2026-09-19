import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gm4oombeh.css';
import '../../css/q/q1vdc4fgq.css';
import '../../css/h/he1sk-rbq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1T2ANbOv"><g class="ft5dv1b6b"><path class="gm4oombeh"/><path class="q1vdc4fgq"/><circle class="he1sk-rbq"/></g></mask></defs><path mask="url(#SVG1T2ANbOv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:whale"} {...others} />);
}

export default Component;
