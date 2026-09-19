import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrz4h5bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrz4h5bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:list-plus"} {...others} />);
}

export default Component;
