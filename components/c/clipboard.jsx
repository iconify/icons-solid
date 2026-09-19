import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kly8rpblu.css';
import '../../css/o/on39wybyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer kly8rpblu"/><path class="duoicon-primary-layer on39wybyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:clipboard"} {...others} />);
}

export default Component;
