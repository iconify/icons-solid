import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl_3kfblh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sl_3kfblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:building-library-16-solid"} {...others} />);
}

export default Component;
