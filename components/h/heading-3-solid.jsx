import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyfpfsbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyfpfsbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:heading-3-solid"} {...others} />);
}

export default Component;
