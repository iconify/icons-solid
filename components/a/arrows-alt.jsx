import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g35dlbbje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g35dlbbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:arrows-alt"} {...others} />);
}

export default Component;
