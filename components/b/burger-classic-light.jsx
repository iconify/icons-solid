import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdk8ml8uk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdk8ml8uk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:burger-classic-light"} {...others} />);
}

export default Component;
