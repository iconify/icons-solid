import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/put069bzd.css';

const viewBox = {"width":717,"height":666};
const content = `<path class="put069bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:download"} {...others} />);
}

export default Component;
