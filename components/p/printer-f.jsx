import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb358qb_o.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="sb358qb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:printer-f"} {...others} />);
}

export default Component;
