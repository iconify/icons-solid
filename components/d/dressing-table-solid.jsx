import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix6phcbzo.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ix6phcbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:dressing-table-solid"} {...others} />);
}

export default Component;
