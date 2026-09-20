import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0qphggqc.css';
import '../../css/j/jnqqvnouk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0qphggqc"/><path class="jnqqvnouk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:doc2x"} {...others} />);
}

export default Component;
