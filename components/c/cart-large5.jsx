import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf-01p6qu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rf-01p6qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cart-large5"} {...others} />);
}

export default Component;
