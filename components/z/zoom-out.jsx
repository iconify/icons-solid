import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4upji2kx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b4upji2kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:zoom-out"} {...others} />);
}

export default Component;
