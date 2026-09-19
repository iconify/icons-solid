import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/urm009q4l.css';
import '../../css/z/z0__n57ww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="urm009q4l"/><path class="z0__n57ww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:justice-scale-02"} {...others} />);
}

export default Component;
