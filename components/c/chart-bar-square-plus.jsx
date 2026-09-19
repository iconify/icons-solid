import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3746f4im.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l3746f4im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-bar-square-plus"} {...others} />);
}

export default Component;
