import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6aj__i7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6aj__i7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rectangular-prism-off"} {...others} />);
}

export default Component;
