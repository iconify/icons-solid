import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jbe9hb-ly.css';
import '../../css/s/sudgglpna.css';
import '../../css/l/l6s3my9rb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jbe9hb-ly"/><path class="sudgglpna"/><path class="l6s3my9rb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:receipt-discount"} {...others} />);
}

export default Component;
