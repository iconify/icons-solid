import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7jxxge6c.css';
import '../../css/v/vnv8itteo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v7jxxge6c"/><path clip-rule="evenodd" class="vnv8itteo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:airplane-duotone"} {...others} />);
}

export default Component;
