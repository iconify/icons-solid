import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx1s_uslx.css';
import '../../css/w/w7l0nbbco.css';
import '../../css/y/yl6s3kuad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dx1s_uslx"/><path class="w7l0nbbco"/><path class="yl6s3kuad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:house-cog-filled"} {...others} />);
}

export default Component;
