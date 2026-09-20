import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwvhx2bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwvhx2bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:unlock-alt-solid"} {...others} />);
}

export default Component;
