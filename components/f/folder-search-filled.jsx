import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icn-0wbfj.css';
import '../../css/d/dnot0zbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="icn-0wbfj"/><path class="dnot0zbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-search-filled"} {...others} />);
}

export default Component;
