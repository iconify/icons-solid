import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pp__1ig7w.css';
import '../../css/p/pqx9v63tj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pp__1ig7w"/><path class="pqx9v63tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:summit"} {...others} />);
}

export default Component;
