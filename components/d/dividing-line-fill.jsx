import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5yr7cbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5yr7cbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dividing-line-fill"} {...others} />);
}

export default Component;
