import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4f2u68gr.css';
import '../../css/m/m0c4jrb5p.css';
import '../../css/v/v4bnoj-6z.css';
import '../../css/i/iturx2siu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4f2u68gr"/><path class="m0c4jrb5p"/><path class="v4bnoj-6z"/><path class="iturx2siu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:scenery"} {...others} />);
}

export default Component;
