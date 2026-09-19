import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0f2lhr2t.css';

const viewBox = {"width":897,"height":1024};
const content = `<path class="b0f2lhr2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:sim"} {...others} />);
}

export default Component;
