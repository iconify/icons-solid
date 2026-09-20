import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1km8wbhh.css';
import '../../css/g/gzxq6ibab.css';
import '../../css/a/ajxbbcbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1km8wbhh"/><path class="gzxq6ibab"/><path class="ajxbbcbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:smartphone-duotone"} {...others} />);
}

export default Component;
