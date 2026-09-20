import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy8w78pep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy8w78pep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sort-descending-shapes-filled"} {...others} />);
}

export default Component;
