import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5ds6_93y.css';
import '../../css/f/fkgg8p-2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5ds6_93y"/><path class="fkgg8p-2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:print"} {...others} />);
}

export default Component;
