import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei2v52zpf.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ei2v52zpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:auto-fill-template"} {...others} />);
}

export default Component;
