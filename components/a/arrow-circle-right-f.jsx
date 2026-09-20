import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo2u5rbmg.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="bo2u5rbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:arrow-circle-right-f"} {...others} />);
}

export default Component;
