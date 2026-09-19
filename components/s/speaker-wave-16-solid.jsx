import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o46217s1u.css';
import '../../css/r/rzmpwjbst.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o46217s1u"/><path class="rzmpwjbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:speaker-wave-16-solid"} {...others} />);
}

export default Component;
