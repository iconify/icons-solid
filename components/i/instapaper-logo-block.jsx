import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhj3n1bhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lhj3n1bhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:instapaper-logo-block"} {...others} />);
}

export default Component;
