import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o68lzb7-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o68lzb7-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:command-solid"} {...others} />);
}

export default Component;
