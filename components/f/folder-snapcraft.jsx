import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppoewyanq.css';
import '../../css/u/ungtlkbnb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ppoewyanq"/><path class="ungtlkbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-snapcraft"} {...others} />);
}

export default Component;
