import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0v9ddlnx.css';
import '../../css/a/a2og3c3yl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0v9ddlnx"/><path class="a2og3c3yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:moon-star-filled"} {...others} />);
}

export default Component;
