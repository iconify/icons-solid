import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyeh7w0zc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jyeh7w0zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:close-circle-fill"} {...others} />);
}

export default Component;
