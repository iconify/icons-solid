import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx7n_hboi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx7n_hboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:radiobox-marked"} {...others} />);
}

export default Component;
