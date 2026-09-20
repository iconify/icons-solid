import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-k9vbclp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-k9vbclp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:circle-multiple"} {...others} />);
}

export default Component;
