import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf4ba4bjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf4ba4bjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tilde"} {...others} />);
}

export default Component;
