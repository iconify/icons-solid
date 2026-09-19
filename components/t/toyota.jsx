import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0fk7bcqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0fk7bcqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:toyota"} {...others} />);
}

export default Component;
