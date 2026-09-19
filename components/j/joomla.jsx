import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz7f8bcqe.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="oz7f8bcqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:joomla"} {...others} />);
}

export default Component;
