import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1v0u_7-q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="s1v0u_7-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:lasso"} {...others} />);
}

export default Component;
