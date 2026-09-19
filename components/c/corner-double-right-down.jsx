import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlcle3b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlcle3b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:corner-double-right-down"} {...others} />);
}

export default Component;
