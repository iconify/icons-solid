import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0pm1q6sv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0pm1q6sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:underline-fill"} {...others} />);
}

export default Component;
