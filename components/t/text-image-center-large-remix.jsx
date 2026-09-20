import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whytibb3v.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="whytibb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:text-image-center-large-remix"} {...others} />);
}

export default Component;
