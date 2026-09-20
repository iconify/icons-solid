import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p336_d8fl.css';
import '../../css/c/c2c-t2a0m.css';
import '../../css/k/kfw0-w9ah.css';
import '../../css/b/bzpx0yzor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p336_d8fl"/><path class="c2c-t2a0m"/><path class="kfw0-w9ah"/><path class="bzpx0yzor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:gender-hetero"} {...others} />);
}

export default Component;
