import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqnw9gbzk.css';
import '../../css/v/vzxnh3iad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqnw9gbzk"/><path class="vzxnh3iad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:comments"} {...others} />);
}

export default Component;
