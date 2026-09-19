import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6t11bbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6t11bbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:columns-one-two-thirds"} {...others} />);
}

export default Component;
