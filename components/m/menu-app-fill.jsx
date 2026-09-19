import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol_k1ab-y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ol_k1ab-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:menu-app-fill"} {...others} />);
}

export default Component;
