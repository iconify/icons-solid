import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se5c19beu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="se5c19beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:phone-arrow-down-left"} {...others} />);
}

export default Component;
