import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwtecabub.css';
import '../../css/m/mlafkbsqu.css';
import '../../css/z/z1k-5fi1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwtecabub"/><path class="mlafkbsqu"/><path class="z1k-5fi1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pen-write-bold"} {...others} />);
}

export default Component;
