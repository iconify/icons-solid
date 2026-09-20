import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcknhyrwe.css';
import '../../css/r/r25-6db-a.css';
import '../../css/m/m-8o9lbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcknhyrwe"/><path class="r25-6db-a"/><path class="m-8o9lbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:engagement-duotone"} {...others} />);
}

export default Component;
