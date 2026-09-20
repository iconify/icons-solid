import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a18o_cmtc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a18o_cmtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:assignment-line"} {...others} />);
}

export default Component;
