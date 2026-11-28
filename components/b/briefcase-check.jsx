import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxcp0ac0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxcp0ac0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:briefcase-check"} {...others} />);
}

export default Component;
