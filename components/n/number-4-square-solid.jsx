import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_kod4b-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v_kod4b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:number-4-square-solid"} {...others} />);
}

export default Component;
