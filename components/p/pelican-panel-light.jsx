import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgd8wvghw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jgd8wvghw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pelican-panel-light"} {...others} />);
}

export default Component;
