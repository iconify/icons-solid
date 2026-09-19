import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obz4z6kng.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="obz4z6kng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:exclaimation-triangle-solid"} {...others} />);
}

export default Component;
