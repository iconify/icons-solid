import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de14d4b6z.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="de14d4b6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:return-key"} {...others} />);
}

export default Component;
