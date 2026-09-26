import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag3oe707j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ag3oe707j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:phone-top-right-with-exclamation-point"} {...others} />);
}

export default Component;
