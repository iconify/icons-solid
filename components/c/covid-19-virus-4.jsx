import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6tp-6btd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6tp-6btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid-19-virus-4"} {...others} />);
}

export default Component;
