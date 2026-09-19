import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0v1oeb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v0v1oeb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:minus-square"} {...others} />);
}

export default Component;
