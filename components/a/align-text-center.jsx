import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbj9szb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qbj9szb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:align-text-center"} {...others} />);
}

export default Component;
