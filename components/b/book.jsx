import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puyvk7u7l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="puyvk7u7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:book"} {...others} />);
}

export default Component;
