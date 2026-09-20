import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-z9jebeq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t-z9jebeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:left-bracket-and-cube"} {...others} />);
}

export default Component;
