import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etc7_tbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="etc7_tbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:topology-complex"} {...others} />);
}

export default Component;
