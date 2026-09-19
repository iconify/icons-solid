import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbl60data.css';
import '../../css/t/ty9-8db6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jbl60data"/><path class="ty9-8db6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:printer"} {...others} />);
}

export default Component;
