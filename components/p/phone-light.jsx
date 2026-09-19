import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxyqm2j5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxyqm2j5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:phone-light"} {...others} />);
}

export default Component;
