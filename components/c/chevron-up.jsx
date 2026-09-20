import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk-59o6jn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mk-59o6jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:chevron-up"} {...others} />);
}

export default Component;
