import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awsq1zbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="awsq1zbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bot-2-sharp-fill"} {...others} />);
}

export default Component;
