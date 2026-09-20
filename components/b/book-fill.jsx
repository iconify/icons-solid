import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga2i_ac1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ga2i_ac1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:book-fill"} {...others} />);
}

export default Component;
