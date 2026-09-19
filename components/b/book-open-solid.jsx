import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov4mpzb8r.css';
import '../../css/y/y3xz-nb8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ov4mpzb8r"/><path class="y3xz-nb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:book-open-solid"} {...others} />);
}

export default Component;
