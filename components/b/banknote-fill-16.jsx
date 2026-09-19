import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2rg7xbog.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="c2rg7xbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:banknote-fill-16"} {...others} />);
}

export default Component;
