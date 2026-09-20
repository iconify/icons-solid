import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuyf9rb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uuyf9rb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:hand-holding-dollar-light"} {...others} />);
}

export default Component;
