import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb_xjuyut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nb_xjuyut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:brand-pocket-solid"} {...others} />);
}

export default Component;
