import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/a5d84bcuv.css';
import '../../css/g/gnusqx75u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="a5d84bcuv"/><path class="gnusqx75u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:baby-milk-bottle"} {...others} />);
}

export default Component;
