import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh4_a5gww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh4_a5gww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-edit-fill"} {...others} />);
}

export default Component;
