import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyrvuq2nc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tyrvuq2nc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:party-decoration"} {...others} />);
}

export default Component;
