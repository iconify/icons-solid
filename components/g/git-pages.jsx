import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjvwrvb1c.css';
import '../../css/j/jobtlp51p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vjvwrvb1c"/><path class="jobtlp51p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:git-pages"} {...others} />);
}

export default Component;
