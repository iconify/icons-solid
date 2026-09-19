import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egq4n-0ks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="egq4n-0ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:turkish-lira"} {...others} />);
}

export default Component;
