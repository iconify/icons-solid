import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6q-x2b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z6q-x2b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:version-fill"} {...others} />);
}

export default Component;
