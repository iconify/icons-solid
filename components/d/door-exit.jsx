import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft2zvc91t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ft2zvc91t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:door-exit"} {...others} />);
}

export default Component;
