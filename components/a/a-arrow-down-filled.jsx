import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngr40ja1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngr40ja1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:a-arrow-down-filled"} {...others} />);
}

export default Component;
