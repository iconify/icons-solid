import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp9czab_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mp9czab_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-list-bold"} {...others} />);
}

export default Component;
