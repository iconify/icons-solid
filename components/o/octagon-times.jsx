import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r88yrtzkl.css';
import '../../css/a/al9hzkb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r88yrtzkl"/><path class="al9hzkb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:octagon-times"} {...others} />);
}

export default Component;
