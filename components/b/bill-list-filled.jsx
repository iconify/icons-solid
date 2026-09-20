import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn1i5feok.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xn1i5feok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bill-list-filled"} {...others} />);
}

export default Component;
