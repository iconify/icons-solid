import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rixoy32sx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rixoy32sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:heart-hand-fill"} {...others} />);
}

export default Component;
