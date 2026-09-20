import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmltz5b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmltz5b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:crown-solid"} {...others} />);
}

export default Component;
