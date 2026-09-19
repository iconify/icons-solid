import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g83i4kb7d.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="g83i4kb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hexo"} {...others} />);
}

export default Component;
