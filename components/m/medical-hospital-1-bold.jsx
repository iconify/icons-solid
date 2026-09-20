import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7hybswkg.css';
import '../../css/o/o08b9ebzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7hybswkg"/><path class="o08b9ebzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-hospital-1-bold"} {...others} />);
}

export default Component;
