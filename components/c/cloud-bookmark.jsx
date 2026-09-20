import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2esq42-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2esq42-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:cloud-bookmark"} {...others} />);
}

export default Component;
