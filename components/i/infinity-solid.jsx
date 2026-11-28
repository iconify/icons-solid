import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/capct4svl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="capct4svl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:infinity-solid"} {...others} />);
}

export default Component;
