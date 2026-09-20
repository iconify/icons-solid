import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiabogb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iiabogb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-commit-horizontal-sharp"} {...others} />);
}

export default Component;
