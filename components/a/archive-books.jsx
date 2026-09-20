import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/inruuxkno.css';
import '../../css/h/h99-3z_et.css';
import '../../css/w/w7nij6b1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="inruuxkno"/><path class="h99-3z_et"/><path class="w7nij6b1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:archive-books"} {...others} />);
}

export default Component;
