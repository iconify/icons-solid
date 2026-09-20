import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz_8thepw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sz_8thepw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:receipt-filled"} {...others} />);
}

export default Component;
