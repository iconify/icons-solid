import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0ksiz2gh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0ksiz2gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:api-app-off"} {...others} />);
}

export default Component;
