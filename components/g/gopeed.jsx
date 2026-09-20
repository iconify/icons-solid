import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_bhh3b7y.css';
import '../../css/c/c6uuuxbuc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f_bhh3b7y"/><path class="c6uuuxbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gopeed"} {...others} />);
}

export default Component;
