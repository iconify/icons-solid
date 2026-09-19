import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytzcdhe_p.css';
import '../../css/r/rsl89ccpi.css';
import '../../css/g/gxtb8y-ag.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ytzcdhe_p"/><path class="rsl89ccpi"/><path class="gxtb8y-ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:serverless-fleet"} {...others} />);
}

export default Component;
