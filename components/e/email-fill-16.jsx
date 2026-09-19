import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1tg5un7g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x1tg5un7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:email-fill-16"} {...others} />);
}

export default Component;
