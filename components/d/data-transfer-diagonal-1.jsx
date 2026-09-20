import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awwo71eeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="awwo71eeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-transfer-diagonal-1"} {...others} />);
}

export default Component;
