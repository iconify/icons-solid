import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o05uwt_pv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o05uwt_pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:minimize-2"} {...others} />);
}

export default Component;
