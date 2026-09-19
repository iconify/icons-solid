import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igd0rpbra.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="igd0rpbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:pointer-left-fill"} {...others} />);
}

export default Component;
