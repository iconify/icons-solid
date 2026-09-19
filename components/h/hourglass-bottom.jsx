import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq6hl0axq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bq6hl0axq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:hourglass-bottom"} {...others} />);
}

export default Component;
