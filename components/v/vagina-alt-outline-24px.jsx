import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkilrjbpe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkilrjbpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vagina-alt-outline-24px"} {...others} />);
}

export default Component;
