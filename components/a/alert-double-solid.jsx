import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrw5j1c7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrw5j1c7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:alert-double-solid"} {...others} />);
}

export default Component;
