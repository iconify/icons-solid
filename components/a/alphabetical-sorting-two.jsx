import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jro4d0bha.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jro4d0bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:alphabetical-sorting-two"} {...others} />);
}

export default Component;
