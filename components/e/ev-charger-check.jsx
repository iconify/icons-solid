import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a366mbwch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a366mbwch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:ev-charger-check"} {...others} />);
}

export default Component;
