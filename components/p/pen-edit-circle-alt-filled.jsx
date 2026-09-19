import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upc9h7bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="upc9h7bfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pen-edit-circle-alt-filled"} {...others} />);
}

export default Component;
