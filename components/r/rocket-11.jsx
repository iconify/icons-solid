import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asp71d7jk.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="asp71d7jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:rocket-11"} {...others} />);
}

export default Component;
