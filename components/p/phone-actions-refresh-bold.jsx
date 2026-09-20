import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzdiky75l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yzdiky75l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-actions-refresh-bold"} {...others} />);
}

export default Component;
