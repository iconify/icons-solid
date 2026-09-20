import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wydnq0baj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wydnq0baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-health"} {...others} />);
}

export default Component;
