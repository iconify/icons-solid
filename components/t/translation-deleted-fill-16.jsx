import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cut4v5iaq.css';
import '../../css/v/vcq9e7hte.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cut4v5iaq"/><path class="vcq9e7hte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:translation-deleted-fill-16"} {...others} />);
}

export default Component;
