import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d49rtyo5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d49rtyo5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:arrow-left-large-light"} {...others} />);
}

export default Component;
