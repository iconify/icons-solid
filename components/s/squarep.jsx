import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1mfq9ajy.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="c1mfq9ajy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squarep"} {...others} />);
}

export default Component;
