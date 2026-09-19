import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnnsfxb0b.css';
import '../../css/t/t4ibq1bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pnnsfxb0b"/><path class="t4ibq1bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-currency-euro-solid"} {...others} />);
}

export default Component;
