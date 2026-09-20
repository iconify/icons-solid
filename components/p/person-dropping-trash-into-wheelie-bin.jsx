import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnq5ckf1o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bnq5ckf1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-dropping-trash-into-wheelie-bin"} {...others} />);
}

export default Component;
