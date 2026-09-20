import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqz1thb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cqz1thb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:donut"} {...others} />);
}

export default Component;
