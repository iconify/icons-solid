import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_8qjbb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_8qjbb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:git-merge-check"} {...others} />);
}

export default Component;
