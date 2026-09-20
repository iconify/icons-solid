import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkacr3qhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tkacr3qhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:logout"} {...others} />);
}

export default Component;
