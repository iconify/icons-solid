import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyl9qceen.css';
import '../../css/k/k02-v4bci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gyl9qceen"/><path class="k02-v4bci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:badge-check"} {...others} />);
}

export default Component;
