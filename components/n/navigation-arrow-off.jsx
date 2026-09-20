import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv0mh3bvu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cv0mh3bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:navigation-arrow-off"} {...others} />);
}

export default Component;
