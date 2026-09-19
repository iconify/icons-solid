import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt0f4aciv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mt0f4aciv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sort-by-up-02"} {...others} />);
}

export default Component;
