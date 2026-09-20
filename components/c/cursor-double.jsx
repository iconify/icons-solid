import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x214vqldu.css';
import '../../css/a/atr7ygb4d.css';
import '../../css/s/s3i4ysbsy.css';
import '../../css/l/l4ohnqbyj.css';
import '../../css/s/sdjz9t1gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x214vqldu"/><path class="atr7ygb4d"/><path class="s3i4ysbsy"/><path class="l4ohnqbyj"/><path class="sdjz9t1gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cursor-double"} {...others} />);
}

export default Component;
