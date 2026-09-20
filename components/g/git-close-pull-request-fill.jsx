import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l91ls0zuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l91ls0zuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:git-close-pull-request-fill"} {...others} />);
}

export default Component;
