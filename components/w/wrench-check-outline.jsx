import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrw03cjgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrw03cjgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wrench-check-outline"} {...others} />);
}

export default Component;
