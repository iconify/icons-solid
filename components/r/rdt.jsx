import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/risd38b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="risd38b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rdt"} {...others} />);
}

export default Component;
