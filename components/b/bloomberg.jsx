import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1xlz4bth.css';
import '../../css/o/ordys2bor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1xlz4bth"/><path class="ordys2bor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:bloomberg"} {...others} />);
}

export default Component;
