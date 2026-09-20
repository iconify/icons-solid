import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ian57fbze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ian57fbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-web-dev-api-cloud"} {...others} />);
}

export default Component;
