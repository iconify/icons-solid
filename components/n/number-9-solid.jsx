import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug-lo7bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ug-lo7bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:number-9-solid"} {...others} />);
}

export default Component;
