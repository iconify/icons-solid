import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvx3ap5pk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cvx3ap5pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:copy"} {...others} />);
}

export default Component;
