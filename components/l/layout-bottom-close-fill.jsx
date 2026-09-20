import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4606q8jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4606q8jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-bottom-close-fill"} {...others} />);
}

export default Component;
