import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyw2gn6tx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fyw2gn6tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:face-meh-blank"} {...others} />);
}

export default Component;
