import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj70oih2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rj70oih2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:git-pull-request-draft"} {...others} />);
}

export default Component;
