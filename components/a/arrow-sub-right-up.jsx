import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c--5i5fyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c--5i5fyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-sub-right-up"} {...others} />);
}

export default Component;
