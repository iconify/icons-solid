import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv2tjhb3o.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="pv2tjhb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:ghost"} {...others} />);
}

export default Component;
