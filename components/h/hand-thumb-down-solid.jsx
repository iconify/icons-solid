import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/febe2bc5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="febe2bc5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:hand-thumb-down-solid"} {...others} />);
}

export default Component;
