import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slom_xddu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slom_xddu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bag-personal-plus"} {...others} />);
}

export default Component;
