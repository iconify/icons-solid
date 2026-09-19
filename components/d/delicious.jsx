import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxz2ub4zl.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="fxz2ub4zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:delicious"} {...others} />);
}

export default Component;
