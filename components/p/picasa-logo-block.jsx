import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i79c3zjsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i79c3zjsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:picasa-logo-block"} {...others} />);
}

export default Component;
