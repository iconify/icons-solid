import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bx1v08qkk.css';
import '../../css/e/egooudxan.css';
import '../../css/h/hfj82dbwb.css';
import '../../css/z/zn8pled7w.css';
import '../../css/v/vy14nbb0y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEW7nXlHl"><g class="ft5dv1b6b"><circle class="bx1v08qkk"/><path class="egooudxan"/><path class="hfj82dbwb"/><circle class="zn8pled7w"/><path class="vy14nbb0y"/></g></mask></defs><path mask="url(#SVGEW7nXlHl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bell-ring"} {...others} />);
}

export default Component;
