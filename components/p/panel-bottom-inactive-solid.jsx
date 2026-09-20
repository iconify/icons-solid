import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5rfv4tlj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k5rfv4tlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-bottom-inactive-solid"} {...others} />);
}

export default Component;
