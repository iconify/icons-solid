import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6a7u-sfr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6a7u-sfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:help-circle-filled"} {...others} />);
}

export default Component;
