import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb6fw3bhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jb6fw3bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:expressionless-face-fill"} {...others} />);
}

export default Component;
