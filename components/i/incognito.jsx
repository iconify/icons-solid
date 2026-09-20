import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6rz7f3rd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r6rz7f3rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:incognito"} {...others} />);
}

export default Component;
