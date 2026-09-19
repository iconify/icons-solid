import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e41hi2rog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e41hi2rog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:search-minus"} {...others} />);
}

export default Component;
