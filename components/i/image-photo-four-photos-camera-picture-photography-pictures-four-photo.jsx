import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ck_0hz9rc.css';
import '../../css/o/oe6fj1znh.css';
import '../../css/u/ufpvzccxq.css';
import '../../css/c/ck16tx8po.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="ck_0hz9rc"/><rect class="oe6fj1znh"/><rect class="ufpvzccxq"/><rect class="ck16tx8po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-photo-four-photos-camera-picture-photography-pictures-four-photo"} {...others} />);
}

export default Component;
