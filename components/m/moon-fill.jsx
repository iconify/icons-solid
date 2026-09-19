import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd6sy1bzy.css';
import '../../css/o/o65zaeisr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yd6sy1bzy"/><path class="o65zaeisr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:moon-fill"} {...others} />);
}

export default Component;
