import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs4ejwyhj.css';
import '../../css/f/fa6uf3bbr.css';
import '../../css/h/haqwlo80j.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="xs4ejwyhj"/><path class="fa6uf3bbr"/><path class="haqwlo80j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:jquery"} {...others} />);
}

export default Component;
