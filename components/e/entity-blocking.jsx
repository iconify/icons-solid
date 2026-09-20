import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk7rb9bbz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bk7rb9bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:entity-blocking"} {...others} />);
}

export default Component;
