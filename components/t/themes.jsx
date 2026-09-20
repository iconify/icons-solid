import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiygavb6e.css';
import '../../css/a/atbdsbcmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fiygavb6e"/><path class="atbdsbcmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:themes"} {...others} />);
}

export default Component;
