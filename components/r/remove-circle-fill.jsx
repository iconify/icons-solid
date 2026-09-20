import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj5i637zg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hj5i637zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:remove-circle-fill"} {...others} />);
}

export default Component;
