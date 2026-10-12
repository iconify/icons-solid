import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9hctvb0f.css';
import '../../css/b/blymy14mn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b9hctvb0f"/><path class="blymy14mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-minus-filled"} {...others} />);
}

export default Component;
