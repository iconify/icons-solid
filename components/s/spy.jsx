import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okjqmb5jh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okjqmb5jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:spy"} {...others} />);
}

export default Component;
