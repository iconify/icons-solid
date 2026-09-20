import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqb4ezbps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqb4ezbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pointer-filled"} {...others} />);
}

export default Component;
