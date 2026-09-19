import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vduzfl9yu.css';
import '../../css/y/y4ihdrb8w.css';
import '../../css/d/da-alwb6l.css';
import '../../css/h/he7u0ebnu.css';
import '../../css/d/dr06m3b1h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG49rNMemU"><g class="ft5dv1b6b"><path class="vduzfl9yu"/><rect class="y4ihdrb8w"/><circle class="da-alwb6l"/><path class="he7u0ebnu"/><rect class="dr06m3b1h"/></g></mask></defs><path mask="url(#SVG49rNMemU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gopro"} {...others} />);
}

export default Component;
