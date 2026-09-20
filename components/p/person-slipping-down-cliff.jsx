import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9zjmsbyg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a9zjmsbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-slipping-down-cliff"} {...others} />);
}

export default Component;
