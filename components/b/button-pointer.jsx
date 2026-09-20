import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maer_5kur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maer_5kur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:button-pointer"} {...others} />);
}

export default Component;
