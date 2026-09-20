import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofvb_sb4h.css';
import '../../css/h/h-ft_9bvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofvb_sb4h"/><path clip-rule="evenodd" class="h-ft_9bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:laptop-phone"} {...others} />);
}

export default Component;
