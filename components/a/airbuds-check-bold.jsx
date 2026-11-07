import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg7x8js6g.css';
import '../../css/e/em-82ubin.css';
import '../../css/y/y0o4vtbls.css';
import '../../css/s/sno1kmbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cg7x8js6g"/><path class="em-82ubin"/><path clip-rule="evenodd" class="y0o4vtbls"/><path clip-rule="evenodd" class="sno1kmbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-check-bold"} {...others} />);
}

export default Component;
