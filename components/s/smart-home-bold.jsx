import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjsgpfv6m.css';
import '../../css/g/gb0e29baj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yjsgpfv6m"/><path class="gb0e29baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-bold"} {...others} />);
}

export default Component;
