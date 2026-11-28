import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k36-ezbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k36-ezbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:outdent-solid"} {...others} />);
}

export default Component;
