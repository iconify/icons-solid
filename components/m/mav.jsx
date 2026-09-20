import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhdm0f4my.css';
import '../../css/n/nzkrizz9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhdm0f4my"/><path clip-rule="evenodd" class="nzkrizz9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mav"} {...others} />);
}

export default Component;
