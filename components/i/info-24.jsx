import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8h3kyc4w.css';
import '../../css/u/u8acicc4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8h3kyc4w"/><path clip-rule="evenodd" class="u8acicc4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:info-24"} {...others} />);
}

export default Component;
