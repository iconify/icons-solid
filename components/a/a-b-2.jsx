import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahr-1eb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahr-1eb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:a-b-2"} {...others} />);
}

export default Component;
