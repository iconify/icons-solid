import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c38x5m7rx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c38x5m7rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:popsicle"} {...others} />);
}

export default Component;
