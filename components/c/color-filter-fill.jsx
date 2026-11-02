import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr5g4pb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr5g4pb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:color-filter-fill"} {...others} />);
}

export default Component;
