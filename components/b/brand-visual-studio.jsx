import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suwmr0geo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suwmr0geo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-visual-studio"} {...others} />);
}

export default Component;
