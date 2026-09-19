import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak6-xi64q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ak6-xi64q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:flag-alt-3-filled"} {...others} />);
}

export default Component;
