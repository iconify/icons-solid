import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n023oz33c.css';
import '../../css/v/v7oavacaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n023oz33c"/><path class="v7oavacaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:global-business-man-user-bold"} {...others} />);
}

export default Component;
