import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suf1grbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suf1grbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:info-octagon-filled"} {...others} />);
}

export default Component;
