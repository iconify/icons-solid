import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/g/gj7luzv3t.css';
import '../../css/b/bv8e12z1q.css';
import '../../css/d/dv8xrgbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="gj7luzv3t"/><path class="bv8e12z1q"/><path class="dv8xrgbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:guitar"} {...others} />);
}

export default Component;
