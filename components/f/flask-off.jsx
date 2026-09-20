import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td2v5s9gv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td2v5s9gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:flask-off"} {...others} />);
}

export default Component;
