import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peqpa-bko.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};
const content = `<path class="peqpa-bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:cloud-f"} {...others} />);
}

export default Component;
