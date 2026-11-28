import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmm7bu0st.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmm7bu0st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:chess-queen"} {...others} />);
}

export default Component;
