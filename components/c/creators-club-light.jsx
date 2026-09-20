import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs5ix9gtg.css';
import '../../css/s/s3kax5bey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cs5ix9gtg"/><path class="s3kax5bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:creators-club-light"} {...others} />);
}

export default Component;
