import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svkx5-wgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svkx5-wgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nextbilliondotai"} {...others} />);
}

export default Component;
