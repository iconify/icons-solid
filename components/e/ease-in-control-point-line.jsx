import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cliq6is5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cliq6is5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ease-in-control-point-line"} {...others} />);
}

export default Component;
