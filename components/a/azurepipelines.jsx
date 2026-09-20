import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz83kzh_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz83kzh_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:azurepipelines"} {...others} />);
}

export default Component;
