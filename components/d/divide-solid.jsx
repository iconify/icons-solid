import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi0-5b3gv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zi0-5b3gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:divide-solid"} {...others} />);
}

export default Component;
