import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6_6oxhtw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x6_6oxhtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sailboat-fill"} {...others} />);
}

export default Component;
