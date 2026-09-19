import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa3zcxb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oa3zcxb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shield-person-filled"} {...others} />);
}

export default Component;
