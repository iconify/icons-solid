import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cs89rebsz.css';
import '../../css/u/ug7x6sbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="cs89rebsz"/><path class="ug7x6sbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:skull-1"} {...others} />);
}

export default Component;
