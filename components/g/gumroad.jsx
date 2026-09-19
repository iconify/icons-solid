import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy-mau2gx.css';
import '../../css/h/huruoib_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b gy-mau2gx"/><path class="b huruoib_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:gumroad"} {...others} />);
}

export default Component;
