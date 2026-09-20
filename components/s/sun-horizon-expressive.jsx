import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buiy88btz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="buiy88btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:sun-horizon-expressive"} {...others} />);
}

export default Component;
