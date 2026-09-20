import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6dbjw9zi.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="x6dbjw9zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:chevron-down"} {...others} />);
}

export default Component;
