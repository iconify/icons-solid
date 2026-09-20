import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py9x-zbbz.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="py9x-zbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:dashboard-square-1"} {...others} />);
}

export default Component;
