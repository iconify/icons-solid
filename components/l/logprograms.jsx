import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3npqbbcr.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="a3npqbbcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:logprograms"} {...others} />);
}

export default Component;
