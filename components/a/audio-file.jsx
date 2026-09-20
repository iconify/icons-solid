import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i26xof0tp.css';
import '../../css/f/ftovblz2s.css';
import '../../css/m/m2m9sdb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i26xof0tp"/><path class="ftovblz2s"/><path class="m2m9sdb6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:audio-file"} {...others} />);
}

export default Component;
