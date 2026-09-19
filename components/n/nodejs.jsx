import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eznpw-5ql.css';

const viewBox = {"width":898,"height":1024};
const content = `<path class="eznpw-5ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:nodejs"} {...others} />);
}

export default Component;
