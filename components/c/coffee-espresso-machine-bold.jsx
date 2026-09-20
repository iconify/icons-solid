import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lglvlnxox.css';
import '../../css/k/ktnt72cco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lglvlnxox"/><path class="ktnt72cco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coffee-espresso-machine-bold"} {...others} />);
}

export default Component;
