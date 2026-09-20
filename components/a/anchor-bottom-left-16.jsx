import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eblevacyj.css';
import '../../css/d/d96i7fh6t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eblevacyj"/><path class="d96i7fh6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-bottom-left-16"} {...others} />);
}

export default Component;
