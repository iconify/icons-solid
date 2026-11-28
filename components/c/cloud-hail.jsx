import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d26h4ib5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d26h4ib5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:cloud-hail"} {...others} />);
}

export default Component;
