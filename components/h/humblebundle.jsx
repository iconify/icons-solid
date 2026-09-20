import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8rw6-4fp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8rw6-4fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:humblebundle"} {...others} />);
}

export default Component;
