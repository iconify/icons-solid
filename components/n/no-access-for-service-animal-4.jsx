import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgo2aer-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgo2aer-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:no-access-for-service-animal-4"} {...others} />);
}

export default Component;
