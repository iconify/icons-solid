import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2nef2b2z.css';
import '../../css/f/fru8l0jpx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k2nef2b2z"/><path class="fru8l0jpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-inbox"} {...others} />);
}

export default Component;
