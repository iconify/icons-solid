import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqxueobie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqxueobie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:credit-card-front-filled"} {...others} />);
}

export default Component;
