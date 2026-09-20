import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6l4a7btz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x6l4a7btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:corner-up-left-light"} {...others} />);
}

export default Component;
