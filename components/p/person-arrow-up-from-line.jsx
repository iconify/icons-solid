import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_19l7b3r.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="m_19l7b3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:person-arrow-up-from-line"} {...others} />);
}

export default Component;
