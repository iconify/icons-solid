import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfywcyb4k.css';
import '../../css/g/g-tdjse5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfywcyb4k"/><path class="g-tdjse5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:chef-gear-gloves-bold"} {...others} />);
}

export default Component;
