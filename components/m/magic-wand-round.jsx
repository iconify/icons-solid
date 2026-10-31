import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eotd31bgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eotd31bgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:magic-wand-round"} {...others} />);
}

export default Component;
