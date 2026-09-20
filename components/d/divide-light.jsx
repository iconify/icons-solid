import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1-k6-beh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1-k6-beh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:divide-light"} {...others} />);
}

export default Component;
