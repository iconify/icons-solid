import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmdhmib0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lmdhmib0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:mouse"} {...others} />);
}

export default Component;
