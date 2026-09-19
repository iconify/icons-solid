import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zksh0n2lk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zksh0n2lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-down-left-solid"} {...others} />);
}

export default Component;
