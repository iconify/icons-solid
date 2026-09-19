import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbq9c8hyy.css';

const viewBox = {"width":34,"height":24};
const content = `<path class="tbq9c8hyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bicycle"} {...others} />);
}

export default Component;
