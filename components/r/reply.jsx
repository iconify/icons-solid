import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4orm5d6y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="v4orm5d6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:reply"} {...others} />);
}

export default Component;
