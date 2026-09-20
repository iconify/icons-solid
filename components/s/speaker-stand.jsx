import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxk2dtb4g.css';
import '../../css/m/m9vpipbzf.css';
import '../../css/g/gnxfpjl9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxk2dtb4g"/><path class="m9vpipbzf"/><path class="gnxfpjl9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:speaker-stand"} {...others} />);
}

export default Component;
