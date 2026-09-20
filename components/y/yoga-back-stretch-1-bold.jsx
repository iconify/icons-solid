import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj062-b3v.css';
import '../../css/l/lgz6trbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj062-b3v"/><path class="lgz6trbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:yoga-back-stretch-1-bold"} {...others} />);
}

export default Component;
