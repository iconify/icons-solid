import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp97wsb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rp97wsb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chef-hat-heart"} {...others} />);
}

export default Component;
