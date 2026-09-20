import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6olgfbfs.css';
import '../../css/c/cos-qwbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6olgfbfs"/><path class="cos-qwbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-people-user-check-bold"} {...others} />);
}

export default Component;
