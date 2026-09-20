import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8s6xvu0y.css';
import '../../css/v/v-nzisfqm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w8s6xvu0y"/><path class="v-nzisfqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-builder-saved-object"} {...others} />);
}

export default Component;
