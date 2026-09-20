import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltsx_kb3q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ltsx_kb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:p-arrow-right"} {...others} />);
}

export default Component;
