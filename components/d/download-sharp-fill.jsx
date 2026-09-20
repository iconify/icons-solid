import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnm9yk__a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnm9yk__a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:download-sharp-fill"} {...others} />);
}

export default Component;
