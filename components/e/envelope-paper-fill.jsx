import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y14p00b7r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y14p00b7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:envelope-paper-fill"} {...others} />);
}

export default Component;
